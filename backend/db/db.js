const mongoose = require('mongoose');


const db=async ()=>{
    try {
        await mongoose.connect('mongodb+srv://preeti:xGn5iqtHfqEpEVm5@cluster0.zlljc.mongodb.net/UKG-Project');
        console.log('Db is connected successfully!');
    } catch (error) {
        console.log('Db not connected ',error);
    }   
}

module.exports=db;