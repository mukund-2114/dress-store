const express = require('express');
const app = express();
const connectDatabase = require('./config/config')
const router = require('./routes/routes')


connectDatabase();

// app.use(express.json());
app.get('/', (req, res) => {
    res.json({
        message:"Welcome to the DressStore Application made by Mukund Kapadia"
    })
})

app.use(router)



app.listen(3000,()=>{
    console.log("Server listening on port 3000")
})