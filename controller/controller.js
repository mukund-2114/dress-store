const Product = require('../models/Product');

const getProducts = async(req,res)=>{
    const products = await Product.find();
    res.json(products);
}
const getSingleProduct = async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404, 'Product not found');
        }
        res.json(product);
    }
    catch(err){
        res.status(500).json({message:"Product not found"});
    }
}

module.exports = {getProducts,getSingleProduct}