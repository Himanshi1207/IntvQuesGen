const mongoose = require('mongoose');


const db=async ()=>{
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('Db is connected successfully!');
    } catch (error) {
        console.log('Db not connected ',error);
    }   
}

module.exports=db;