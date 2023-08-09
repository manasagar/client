const jwt =require('jsonwebtoken')
const SecreT="Manasisthegreatest"
const fetchuser=(req,res,next)=>{
    const token=req.header('auth_token');

    if(!token){
        res.status(401).send('no_auth');
    }
    try{
    const data=jwt.verify(token,SecreT)
    req.user=data.user
    
next()
    }catch(error){
        console.error(error.message)
res.status(401).send('wrong auth');
    }
}
module.exports=fetchuser