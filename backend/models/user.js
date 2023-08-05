const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
    name: String,
    email:{ type:String,unique:true},
    age: String,
    password: String,

  });
const  user = mongoose.model('user', noteSchema);

module.exports=user
