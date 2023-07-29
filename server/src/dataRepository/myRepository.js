const { json } = require('body-parser');
const mssql = require('mssql')

const jwt = require('jsonwebtoken');

const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: 'localhost', //Server to connect to. You can use 'localhost\instance' to connect to named instance.
    port: 1433, //Port to connect to (default: 1433). Don't set when connecting to named instance.
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false, // for azure use true
        trustServerCertificate: true // use true for local dev / self-signed certs
    }
}
const appPool = new mssql.ConnectionPool(sqlConfig);


const getUserByUsername = async (username) => {
    const dbConnection = await appPool.connect();
    const loadUserQuery = `SELECT * from Customers WHERE username = '${username}'`
    const user = await dbConnection.query(loadUserQuery);
    if (user.recordset.length === 0) {
        throw Error(`user  ${username} not exists`);
    }
    return user.recordset[0];
}

const getAllPlants = async (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await appPool.connect()
            try {
                let results = await myConnectionPoolToDB.query(`SELECT Plants.id,plantName,price,pType.typeName,Season.sName,description_,image_url,lighting_requirements FRom plants
                join pType
                on Plants.typeId=pType.id
                join Season
                on Plants.seasonId=Season.id`)
                resolve(results);
            }
            catch (err) {
                console.log("there was an error while sending query to DB ", err);
                reject(err);
            }
        }
        catch (err) {
            console.error('ERROR CONNECTION TO DB: ', err);
            reject('ERROR CONNECTION TO DB: ', err);
        }
    })
};



const addCustomer = async (body) => {
    const { username, email, password } = body;
    if (!username || !email || !password) {
        throw Error('you should provide non-empty username, email and password');
    }
    
    const dbConnection = await appPool.connect();
    const query = `INSERT INTO Customers(username, eAdress,password_) values ('${username}','${email}','${password}')`;
    await dbConnection.query(query);
}

const costumerLogin = async (body) => {
    const {username, password} = body;
    if (!username || !password) {
        throw Error('you should provide non-empty username and password');
    }
    const dbConnection = await appPool.connect();
    const loadUserQuery = `SELECT * from Customers WHERE username = '${username}'`
    const user = await dbConnection.query(loadUserQuery);
    
    if (user.recordset.length === 0) {
        throw Error(`Wrong credentials`);
    }
    
    if (user.recordset[0]['password_'] !== password) {
        throw Error(`Wrong credentials`);
    }

    const userToken = jwt.sign({username, password}, process.env.SECRET);
    const addTokenQuery = `INSERT INTO Sessions(usernameId, token) values (${user.recordset[0].id}, '${userToken}')`
    await dbConnection.query(addTokenQuery);

    return { token: userToken};
}

const getCart = async ({customerId}) => {
    const dbConnection = await appPool.connect();
    query = `SELECT plants.id as plantId, COUNT(plants.id) as quantity, plantName, price, image_url FROM CART 
            JOIN Plants
            ON Cart.plantId = Plants.id
            WHERE customerId = ${customerId}
            GROUP BY plants.id, plantName, price, image_url`
    let result = (await dbConnection.query(query));
    return result.recordset;
}

const addToCart = async ({customerId, plantId}) => {
    const dbConnection = await appPool.connect();
    const query = `INSERT INTO Cart(customerId,plantId) values (${+customerId},${+plantId})`;
    await dbConnection.query(query);
}

const deleteFromCart = async ({customerId, plantId}) => {
    const dbConnection = await appPool.connect();
    const query = `DELETE TOP(1) FROM Cart WHERE customerId = ${customerId} AND plantId = ${plantId}`;
    await dbConnection.query(query);
}

const makeAnOrder = async ({customerId}) => {
        const dbConnection = await appPool.connect();
        const query = `INSERT INTO Orders(customerId) values (${+customerId})`
        const result = await dbConnection.query(query);
        const orderIdQuery = `SELECT TOP(1) * FROM Orders WHERE customerId = ${+customerId} ORDER BY id DESC`
        const orderId = (await dbConnection.query(orderIdQuery)).recordset[0].id;
        const runsotre = ` EXEC [dbo].[addOrderDetailsByOrderId] @orderId = ${orderId};`
        const result1 = await dbConnection.query(runsotre);
        const deleteAllItemsFromCart = `delete from Cart WHERE customerId=${customerId}`
        const result2 = await dbConnection.query(deleteAllItemsFromCart)
}


module.exports.getAllPlants = getAllPlants;
module.exports.addCustomer = addCustomer;
module.exports.costumerLogin = costumerLogin;
module.exports.addToCart = addToCart;
module.exports.deleteFromCart = deleteFromCart;
module.exports.getUserByUsername = getUserByUsername;
module.exports.makeAnOrder = makeAnOrder;
module.exports.getCart = getCart;