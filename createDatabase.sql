IF EXISTS (SELECT 1 FROM sys.databases WHERE name = 'NurseryDB')
BEGIN
   USE master
ALTER DATABASE NurseryDB 
SET SINGLE_USER 
WITH ROLLBACK IMMEDIATE;
   DROP DATABASE NurseryDB
END

IF NOT EXISTS (SELECT 1 FROM sys.databases WHERE name = 'NurseryDB')
CREATE DATABASE NurseryDB;
GO

USE NurseryDB;
GO

CREATE TABLE Season(
id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
sName varchar(25) NOT NULL 
);

CREATE TABLE pType(
id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
typeName varchar(25) NOT NULL
);



CREATE TABLE Customers(
id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
username varchar(25) NOT NULL UNIQUE,
eAdress varchar(50) not null,
password_ varchar(50) not null
);



CREATE TABLE Sessions(
	id int IDENTITY(1,1) NOT NULL,
	usernameId int NOT NULL FOREIGN KEY REFERENCES Customers(id),
	token varchar(200) NOT NULL
);


CREATE TABLE Plants(
id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
plantName varchar(30) NOT NULL,
price DECIMAL(10,2) NOT NULL,
typeId int NOT NULL FOREIGN KEY REFERENCES pType(id),
seasonId int NOT NULL FOREIGN KEY REFERENCES Season(id),
description_ varchar(350),
image_url varchar(300) NOT NULL,
lighting_requirements varchar(100) NOT NULL
);

CREATE TABLE Cart(
id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
customerId int NOT NULL FOREIGN KEY REFERENCES Customers(id),
plantId int NOT NULL FOREIGN KEY REFERENCES Plants(id)
);

CREATE TABLE Orders(
id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
customerId int NOT NULL FOREIGN KEY REFERENCES Customers(id),
orderDate DATETIME NOT NULL DEFAULT GETDATE()
);

CREATE TABLE OrdersDetail(
id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
orderId int NOT NULL FOREIGN KEY REFERENCES Orders(id),
plantId int NOT NULL FOREIGN KEY REFERENCES Plants(id),
quantity int NOT NULL
);

INSERT INTO Season(sName) VALUES
  ('All-Year'),
  ('Summer'),
  ('Spring'),
  ('Fall'),
  ('Winter');


  INSERT INTO pType(typeName) VALUES
  ('Outdoor'),
  ('Indoor'),
  ('Succulent'),
  ('Bulb'),
  ('Shrub'),
  ('Vine');


INSERT INTO Plants (plantName, price, typeId, seasonId, description_, image_url, lighting_requirements)
VALUES
  ('Aloe Vera', 12.99, 3, 1, 'Aloe Vera is a succulent plant that is popular for its medicinal properties.', 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80', 'Bright indirect light'),
  ('Spider Plant', 8.99, 2, 1, 'Spider Plant is a popular houseplant that is easy to care for and produces small white flowers.', 'https://m.media-amazon.com/images/I/61PPYUoc2aL.jpg', 'Moderate to bright indirect light'),
  ('Peace Lily', 15.99, 2, 1, 'Peace Lily is a low-maintenance houseplant that can also help purify the air.', 'https://mobileimages.lowes.com/productimages/cb9214a1-e435-4211-886a-71002916d653/62776214.jpg', 'Low to moderate light'),
  ('Jade Plant', 11.99, 3, 1, 'Jade Plant is a succulent with thick, shiny leaves that can be trained into a tree-like shape.', 'https://cdn.shopify.com/s/files/1/1706/1307/products/Crassula-ovata-Jade-Plant-30x50cm-Raindrop-Globe-Planter-Anthracite-42x30cm.jpg?v=1679657196', 'Bright direct light'),
  ('Pothos', 10.99, 2, 1, 'Pothos is a trailing vine that is easy to care for and can be grown in a variety of lighting conditions.', 'https://images.thdstatic.com/productImages/55d43f1a-9c07-4a76-822d-670d20ea9b85/svn/pothos-plants-pnjpoth006-64_600.jpg', 'Low to moderate light'),
  ('String of Pearls', 14.99, 3, 1, 'String of Pearls is a unique succulent with long trailing stems of round, bead-like leaves.', 'https://cdn.shopify.com/s/files/1/0014/9789/0903/products/cactus-en-ligne-string-of-pearls-4_700x700.jpg?v=1679594988', 'Bright indirect light'),
  ('Lavender', 8.99, 1, 2, 'Lavender is a fragrant herb that produces spikes of purple flowers and is often used in essential oils and perfumes.', 'https://www.littleyellowwheelbarrow.com/wp-content/uploads/2021/08/grow-lavender-pots-3-scaled.jpg', 'Full sun'),
  ('Dahlia', 10.99, 1, 2, 'Dahlia is a popular garden flower with large, colorful blooms in a variety of shapes and sizes.', 'https://www.gardeningknowhow.com/wp-content/uploads/2015/10/dahlia-pot.jpg', 'Full sun'),
  ('Roses', 17.99, 1, 2, 'Roses are a classic garden flower with a wide range of colors and fragrances.', 'https://secure.img1-cg.wfcdn.com/im/47931592/compr-r85/3307/33078131/rose-centerpiece-in-pot.jpg', 'Full Sun'),
  ('Echeveria elegans', 7.99, 3, 1, 'Echeveria elegans is a charming, rosette-forming succulent with pale green, slightly curved, fleshy leaves. The leaves are tipped with a rosy-pink hue, and the entire rosette is dusted with a layer of white powdery substance called farina. This plant produces offsets or baby plants on long stems that can be used for propagation.', 'https://cdn.shopify.com/s/files/1/2035/7049/products/EcheveriaElegans_1024x1024@2x.jpg?v=1657339032', 'Bright, indirect light'),
  ('Boxwood', 25.00, 5, 4, 'Boxwood is a versatile and popular shrub that is often used for hedges, borders, and topiaries. It is known for its dense foliage, which can be clipped and shaped into a variety of forms. Boxwood is low maintenance and can thrive in a variety of soil types, as long as it has good drainage.', 'https://mobileimages.lowes.com/productimages/cc478b49-ac86-4181-aeca-efdd882c5534/10581726.jpg', 'Full Sun, Partial Shade'),
  ('Lilac', 30.00, 5, 3, 'Lilacs are known for their fragrant and showy blooms, which come in shades of pink, purple, white, and blue. They are a popular choice for hedges and borders, and can also be grown as a specimen plant. Lilacs prefer well-drained soil and full sun, although they can tolerate some shade.', 'https://mobileimages.lowes.com/productimages/81d138fd-f9df-44b4-8532-cefe230aecb1/02986142.jpg', 'Full Sun, Partial Shade'),
  ('Forsythia', 20.00, 5, 3, 'Forsythias are known for their bright yellow flowers, which are one of the first signs of spring. They are a popular choice for hedges and borders, and can also be grown as a specimen plant. Forsythias prefer well-drained soil and full sun, although they can tolerate some shade.', 'https://m.media-amazon.com/images/I/71GJJ17q7gS._AC_UF894,1000_QL80_.jpg', 'Full Sun, Partial Shade'),
  ('Tulip', 12.99, 4, 3, 'Tulips are some of the most popular and recognizable spring-blooming bulbs. They come in a wide range of colors and are perfect for adding color to your garden.', 'https://m.media-amazon.com/images/I/81R0d70uiuL.jpg', 'Full Sun to Partial Shade'),
  ('Hyacinth', 11.99, 4, 3, 'Hyacinths are fragrant spring-blooming bulbs that come in a variety of colors, including pink, blue, white, and purple.', 'https://mobileimages.lowes.com/productimages/bdfed85a-9977-4ac6-ad22-67199d24521f/05013596.jpg', 'Full Sun to Partial Shade'),
  ('Crocus', 9.99, 4, 3, 'Crocuses are early-blooming bulbs that are perfect for adding color to your garden in late winter or early spring. They come in a variety of colors, including purple, yellow, and white.', 'https://img.freepik.com/premium-photo/violet-spring-crocuses_772702-701.jpg?w=2000', 'Full Sun to Partial Shade'),
  ('Bird of Paradise', 24.99, 2, 1, 'Bird of Paradise is a tropical plant known for its large, vibrant flowers that resemble a bird in flight.', 'https://m.media-amazon.com/images/I/61frQqCUiCL._AC_UF894,1000_QL80_.jpg', 'Bright indirect light'),
  ('Monstera Deliciosa', 16.99, 2, 1, 'Monstera Deliciosa, also known as the Swiss Cheese Plant, is a popular houseplant with large, fenestrated leaves.', 'https://media.istockphoto.com/id/1278906674/photo/monstera-in-a-pot-isolated-on-white-background-close-up-of-tropical-leaves-or-houseplant-that.jpg?s=170667a&w=0&k=20&c=ModkGR0c2Nl3JsE2ixoUwQmaP_u0gw1Cq0tq_SFTKXQ=', 'Bright indirect light'),
  ('Sunflower', 9.99, 1, 2, 'Sunflowers are large, bright flowers that turn towards the sun. They are a popular choice for gardens and bouquets.', 'https://png.pngitem.com/pimgs/s/107-1071905_sunflower-png-real-sunflower-in-pot-transparent-png.png', 'Full sun'),
  ('Orchid', 19.99, 2, 1, 'Orchids are elegant flowers known for their beauty and variety. They require special care but can be rewarding to grow.', 'https://m.media-amazon.com/images/I/714Hfe-nBKL.jpg', 'Bright indirect light'),
  ('Snake Plant', 12.99, 2, 1, 'Snake Plant, also known as Mother-in-Law\s Tongue, is a hardy indoor plant with tall, upright leaves.', 'https://m.media-amazon.com/images/I/51qSyyACyrS._AC_UF894,1000_QL80_.jpg', 'Low to moderate light'),
  ('Fiddle Leaf Fig', 29.99, 2, 1, 'Fiddle Leaf Fig is a popular houseplant with large, glossy leaves that resemble a fiddle or violin.', 'https://mobileimages.lowes.com/productimages/00d0570c-c122-4ea1-acbf-ca0eae937f5c/10840998.jpg?size=pdhism', 'Bright indirect light'),
  ('Cactus', 7.99, 3, 1, 'Cactus is a desert plant known for its ability to store water in its thick, fleshy stems or pads.', 'https://c1.wallpaperflare.com/preview/736/183/824/cactus-minimalism-plant-pot.jpg', 'Bright direct light'),
('Lemon Tree', 34.99, 1, 4, 'Lemon Tree is a citrus tree that produces fragrant flowers and tart, juicy lemons.', 'https://cdn.shopify.com/s/files/1/0551/2033/0798/products/faux-lemon-tree-in-white-ceramic-pot-florals-and-greenery-the-well-appointed-house-1.jpg?v=1678242218', 'Full sun'),
  ('Bamboo', 14.99, 2, 1, 'Bamboo is a fast-growing plant that adds a touch of elegance to any indoor space.', 'https://images.thdstatic.com/productImages/0afaae4a-bfbd-4f58-9178-74e8ba1f524a/svn/arcadia-garden-products-house-plants-lv32-64_1000.jpg', 'Bright indirect light'),
  ('English Ivy', 9.99, 6, 1, 'English Ivy is a versatile plant that can be grown as a ground cover or trained to climb walls, fences, and trellises.', 'https://thelittlebotanical.com/wp-content/uploads/2019/07/24_JT_012_1000x1000.jpg', 'Low to moderate light'),
  ('Palm Tree', 39.99, 6, 1, 'Palm Trees are tropical plants that add a touch of paradise to any indoor or outdoor space.', 'https://media.istockphoto.com/id/1128637178/photo/houseplant-small-green-palm-tree-in-white-flower-pot-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=6vn33Q0_L2969H5he57N6t44GaimL_J4ilNzzyhQfvM=', 'Bright indirect light'),
  ('Lily of the Valley', 14.99, 1, 3, 'Lily of the Valley is a fragrant, shade-loving flower that produces delicate bell-shaped blooms.', 'https://media.istockphoto.com/id/984348002/vector/lily-of-the-valley-flowers-in-white-vase-realistic-vector-illustration.jpg?s=612x612&w=0&k=20&c=zk3nyUZOFrYu7ERVV5MNZ947VbuUD0Ft3WwrOinWNZc=', 'Partial to full shade'),
  ('Chrysanthemum', 8.99, 1, 4, 'Chrysanthemums, also known as mums, are fall-blooming flowers that come in a variety of colors and forms.', 'https://media.istockphoto.com/id/1249581942/photo/orange-chrysanthemums-isolated-over-white-background.jpg?s=612x612&w=0&k=20&c=YD3wIuUR9ImE0TvSDOB_EUd3cys7fix3AiSS4XUOGQ8=', 'Full sun to partial shade'),
  ('Anthurium', 16.99, 2, 1, 'Anthurium is a tropical plant known for its vibrant, heart-shaped flowers and glossy, dark green leaves.', 'https://media.istockphoto.com/id/1191892703/photo/red-anthurium-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=6avkPGnppG7TwGFTD_IemTl1F9POc_VfIlye7aVM5SI=', 'Bright indirect light');

  

  --select * from plants
  --select * from Orders
  --select * from Cart
  --select * from Customers
  --select * from OrdersDetail
    --select * from Sessions

--  SELECT plantName, price, typeId, seasonId, description_, image_url, lighting_requirements,Season.sName,pType.typeName
--FROM( (Plants
--INNER JOIN Season ON Season.id=Plants.seasonId)
--INNER JOIN pType ON Plants.typeId=pType.id)


--GROUP BY customerId ;