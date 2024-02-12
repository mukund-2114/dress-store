const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://mukund:mukund@cluster0.ezo9c3h.mongodb.net/Marketplace?retryWrites=true&w=majority'

const connectDatabase = ()=>{
    const connect = mongoose.connect(mongoURI);

        if(connect){
            console.log("Database connected successfully");
        }
        else{
            console.log("Database connection failed");
        }
}

module.exports = connectDatabase;

