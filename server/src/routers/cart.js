const express = require('express');
const myRepository = require('../dataRepository/myRepository');
const authenticateMiddleware = require('../middleware/auth').authenticateMiddleware
const cartRouter = express.Router()


cartRouter.get('/', authenticateMiddleware, async (req, res) => {
    try {
        const cart = await myRepository.getCart({customerId: req.user.id});
        res.status(200).send(cart);
    } catch (e) {
        res.status(400).send({error: e.message})
    }
});

cartRouter.post('/', authenticateMiddleware, async (req,res) => {
    try {
        await myRepository.addToCart({customerId: req.user.id, plantId: req.body.plantId});
        res.status(201).send('Item added to cart');
    } catch (e) {
        res.status(400).send({error: e.message})
    }
})

cartRouter.delete('/',authenticateMiddleware, async (req,res) => {
    try {
        await myRepository.deleteFromCart({customerId: req.user.id, plantId: req.body.plantId});
        res.status(201).send('Item removed from cart');
    } catch (e) {
        res.status(400).send({error: e.message})
    }
})

cartRouter.post('/makeOrder',authenticateMiddleware, async (req,res) => {
    try {
        await myRepository.makeAnOrder({customerId: req.user.id});
        res.status(201).send('create an order');
    } catch (e) {
        res.status(400).send({error: e.message})
    }
})


module.exports = cartRouter;