import React ,{useState} from "react";
import { useNavigate } from "react-router-dom";
export default function Login(){
    const[credentials,setCredential]=useState({email:"",password:""})
let navigate=useNavigate()
   const handle=async(e)=>{
    const {email,password}=credentials;
    e.preventDefault();
          // Default options are marked with *
           const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json", 
            },
            body: JSON.stringify({email,password}), // body data type must match "Content-Type" header
          });
          const jsn=await response.json();
          if(jsn.result){
            localStorage.setItem('token',jsn.auth_token)
            navigate('/')
          }
          else{
            alert("incorrect credentials")
          }
          console.log(jsn);
   }
   const onChange=(e)=>{
    setCredential({...credentials,[e.target.name]:e.target.value})
    
    
    }
    return(
        <div>
        
        <form onSubmit={handle}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" value={credentials.email} onChange={onChange} placeholder="Enter email"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={credentials.password} onChange={onChange} placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        </div>
    )
}