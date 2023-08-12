const express = require('express')
const router = express()
const { validationResult, body } = require('express-validator');
const Note=require('../models/note')
const fetchuser=require('../middleware/fetch')
//fetch notes route 1
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

    console.log(req.body)
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
    
}
const note=new Note({
    'user':req.user.id,
    'title':req.body.title,
    'description':req.body.description,
})
//console.log(note)
const savednote=await note.save();

res.json(savednote);
    }catch(error){
        console.error(error.message)
        res.status(500).send('internal server error');
    }
    })
router.put('/updatenote/:id',fetchuser,async (req,res)=>{
        try{
        const{title,description}=req.body;
        const newnote={};
        if(title){newnote.title=title};
        if(description){newnote.description=description};
        const note=await Note.findById(req.params.id);
        if(note.user.toString()!==req.user.id){
          return  res.status(401).send("Not allowed");
        }
        const change=await Note.findByIdAndUpdate(req.params.id,{$set:newnote},{new:true})
        res.json({change});
    }catch(error){
        console.error(error.message)
        res.status(500).send('internal server error');
    }
    })

    router.delete('/delete/:id',fetchuser,async (req,res)=>{
        try{
        const{title,description}=req.body;
        const newnote={};
        if(title){newnote.title=title};
        if(description){newnote.description=description};
        const note=await Note.findById(req.params.id);
        if(!note)
        {
            return  res.status(401).send("Not found");
        }
        if(note.user.toString()!==req.user.id){
          return  res.status(401).send("Not allowed");
        }
        const change=await Note.findByIdAndDelete(req.params.id)
        res.json({change});
    }catch(error){
        console.error(error.message)
        res.status(500).send('internal server error');
    }
    })
module.exports=router