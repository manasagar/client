const mongoose=require('mongoose')
const mongourl='mongodb+srv://manas:manas@cluster0.osifiku.mongodb.net/project'
const connectToMongo=()=>{
    mongoose.connect(mongourl,{useNewUrlParser:true,useUnifiedTopology:true})
   let db= mongoose.connection
   db.once('open',function(){
   console.log('connected to database')
})
}
module.exports=connectToMongo;
