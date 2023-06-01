const mongoose = require('mongoose')



const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>
     console.log('Connecting to the DB..')).catch((err)=>console.log(err))
    
}

module.exports= connectDB;

// mongoose.connect(process.env.MONGO_URL,{
  
// }).then(()=>
// console.log('Connecting to the DB..')).catch((err)=>console.log(err))

/*  useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true */