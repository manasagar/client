const express = require('express')
const router = express()
const jwt =require('jsonwebtoken')
const SecreT="Manasisthegreatest"
const bcrypt= require('bcryptjs')
const User=require('../models/user')
const fetchuser=require('../middleware/fetch')
const { validationResult, body } = require('express-validator');
//route 1 for user creation
router.post('/usercreate',[
    body('email').isEmail(),
  body('password').isLength({ min: 6 })
],async(req,res)=>{
  try{
let result =false;
const errors = validationResult(req);
if(!errors.isEmpty()){
    return res.json(result,req.body);
}

let user=User(req.body)
let ch=await User.findOne({result,email:user.email})
if(ch){
  return res.json({result,error:"already there"})
}
let pas=user.password;
console.log(pas)
//salt 
const salt=await bcrypt.genSalt(10);
const secpass=await bcrypt.hash(pas,salt);
user.password=secpass
//salt
await user.save()
//auth
let data={
  user:{id:user._id}
}
result=true
console.log(data)
const auth_token=jwt.sign(data,SecreT)
//auth
res.json({result,auth_token})
  }catch(error){
    console.log(error.message)
res.status(500).send('internal server error');
  }
})
//route 2 for user login
router.post('/login',[
  body('email','enter valid email').isEmail(),
  body('password','password cannot be blank').exists()
],async(req,res)=>{
  let result=false;
  const errors = validationResult(req);
  if(!errors.isEmpty()){
      return res.status(400).json({result,errors:errors.array()});
  }
  const {email,password}=req.body;
  try{
  let user=await User.findOne({email:email});
  if(!user){
res.status(400).json({result,error:"please give correct credentials"})
  }
  const passwordCompare=await bcrypt.compare(password,user.password)
  if(!passwordCompare){
    res.status(400).json({result,error:"please give correct credentials"})
  }
  let data={
    user:{id:user.id}
  }
  const auth_token=jwt.sign(data,SecreT)
//auth
result=true
res.json({result,auth_token})
  }
  catch(error){
console.log(error.message)
res.status(500).send('internal server error');
  }
})
//route 3 user details
router.post('/getuser',fetchuser,async (req,res)=>{
try{
  todo=req.user
  console.log(todo.id)
const user=await User.findById(todo.id).select('-password')
res.json(user)
}catch(error){
  console.error(error.message)
res.status(500).send('internal server error');
}
})
module.exports=router