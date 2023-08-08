const express = require('express')
const router = express()
const { validationResult, body } = require('express-validator');
const Note=require('../models/note')
const fetchuser=require('../middleware/fetch')
//fetch notes route 1
router.get('/',async (req,res)=>{
res.send('manas')
})
router.get('/fetchallnotes',fetchuser,async (req,res)=>{
    try{
const notes=await Note.find({user:req.user.id});
res.json(notes)
    }
    catch(error){
        console.error(error.message)
        res.status(500).send('internal server error');
    }
})
//fetch notes route 2
router.post('/createnote',fetchuser,[
    body('title','no title found').exists(),
  body('description','too short').isLength({ min: 6 })
],async (req,res)=>{
    const errors = validationResult(req);
    try{

    
if(!errors.isEmpty()){
    return res.status(400).json({errors:error.array()});
    
}const note=new Note({
    'user':req.user.id,
    'title':req.body.title,
    'description':req.body.description,
})
console.log(note)
const savednote=await note.save();

res.json(savednote);
    }catch(error){
        console.error(error.message)
        res.status(500).send('internal server error');
    }
    })

module.exports=router