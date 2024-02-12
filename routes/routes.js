const express = require('express');
const { getProducts } = require('../controller/controller');
const router = express.Router();

router.get('/api/products',getProducts);
router.get('/api/products:id',);
router.post('/api/products',)
router.put('/api/products/:id');
router.delete('/api/products/:id');
router.delete('/api/products');
router.get('/api/products?name=[kw]');

module.exports = router;