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

const addProduct = async(req,res)=>{
    const {name,description,price,quantity,category} = req.body;
    const product = await Product.create({
        name,description,price,quantity,category
    })
    res.json({message:"Product added successfully"});
}

const updateProduct = async(req,res)=>{
    const {name,description,price,quantity,category} = req.body;
    const product = await Product.findById(req.params.id);
    if(product){
        product.set({name,description,price,quantity,category})
        product.save();
        res.json({message:"Product updated successfully"});
    }
    else{
        res.json({message:"Product not found"});
    }
}

const deleteSingleProduct = async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if(product){
        await Product.deleteOne(product);
        res.json({message:"All Product deleted successfully"});
    }
    else{
        res.json({message:"Product not found"});
    }
}

const deleteAllProducts = async(req,res)=>{
    await Product.deleteMany();
    res.json({message:"All Products deleted successfully"});
}

const getFilteredProducts = async(req,res)=>{
    const queryName = req.query.name;
    const products = await Product.find();

    const  filteredProducts = products.filter(item => item.name.toLowerCase().includes(queryName.toLowerCase()));
    if(filteredProducts.length > 0){
        res.json(filteredProducts);
    }
    else{
        res.json({message:"Product not found"});
    }
}

module.exports = {getProducts,getSingleProduct,addProduct,updateProduct,deleteSingleProduct,deleteAllProducts,getFilteredProducts}