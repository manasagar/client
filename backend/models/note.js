const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,
    ref:'user'},
    title: String,
    description: String,
   
  });
const note = mongoose.model('note', noteSchema);
module.exports=note

