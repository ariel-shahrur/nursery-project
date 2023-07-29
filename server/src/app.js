require('dotenv').config()
var express = require('express');
var cors = require('cors');
const cartRouter = require('./routers/cart');
const myRepository = require('./dataRepository/myRepository');
const app = express();
app.use(express.json());

app.use(cors({origin: 'http://127.0.0.1:3000'}));


app.use('/cart', cartRouter);


app.get('/',(req,res)=>{
    myRepository.getAllPlants()
    .then((x)=>{
        res.json(x);
    })
})


app.post('/signup',async (req,res)=>{
    try {
        await myRepository.addCustomer(req.body);
        res.status(201).send('User added successfully');
    }
    catch (err) {
        res.status(400).send({error: err.message});
    }
})

app.post('/login', async (req,res)=>{
    try {
        const user = await myRepository.costumerLogin(req.body);
        res.status(200).send(user);
        console.log("you loged in");
    }
    catch (err) {
        res.status(400).send({error: err.message});
    }
})

app.post('/', async (req,res)=>{
    try {
        const user = await myRepository.costumerLogin(req.body);
        res.status(200).send(user);
    }
    catch (err) {
        res.status(400).send({error: err.message});
    }
})

app.use(express.static('public'));
//=========================
const port = process.env.PORT || 3005;

app.listen(port, function () {
    console.log(`My app is listening on port ${port}!`);
});