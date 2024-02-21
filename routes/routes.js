const express = require('express');
const { getProducts, getSingleProduct, addProduct, updateProduct, deleteSingleProduct,deleteAllProducts, getFilteredProducts} = require('../controller/controller');
const router = express.Router();

router.get('/api/products',getProducts);
router.get('/api/products/:id',getSingleProduct);
router.post('/api/products',addProduct)
router.put('/api/products/:id',updateProduct);
router.delete('/api/products/:id',deleteSingleProduct);
router.delete('/api/products',deleteAllProducts);
router.get('/api/product',getFilteredProducts);

module.exports = router;