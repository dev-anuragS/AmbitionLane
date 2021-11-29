const mongoose = require('mongoose');

connectDB = async()=>{
    try{
        const connection = await mongoose.connect(process.env.mongo_URI,{
            useNewUrlParser : true,
            useUnifiedTopology : true
        })
    }catch(e){
        console.log(e);
        exit(1);
    }
}

modules.export = connectDB;