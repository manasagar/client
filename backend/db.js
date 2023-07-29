const mongoose=require('mongoose')
const mongourl='mongodb+srv://manas:manas@cluster0.osifiku.mongodb.net/project'
const connectToMongo=()=>{
    mongoose.connect(mongourl,()=>{
        console.log("connected to database")
    })
}
