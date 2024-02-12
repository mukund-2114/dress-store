const express = require('express');
const app = express();
const connectDatabase = require('./config/config')

connectDatabase();
app.get('/', (req, res) => {
    res.json({
        message:"Welcome to the DressStore Application made by Mukund Kapadia"
    })
})



app.listen(3000,()=>{
    console.log("Server listening on port 3000")
})