import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
export default function Signup(){
    let navigate=useNavigate()
    const[credentials,setCredential]=useState({name:"",age:"",email:"",password:""})
    const onChange=(e)=>{
        setCredential({...credentials,[e.target.name]:e.target.value})
        
        }
        const handle=async(e)=>{
            const {name,age,email,password}=credentials;
            e.preventDefault();
            console.log(name,email,age,password)
            const response = await fetch("http://localhost:5000/api/auth/usercreate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json", 
            },
            body: JSON.stringify({name,email,age,password}), // body data type must match "Content-Type" header
          });
          const jsn=await response.json();
          if(jsn.result){
            localStorage.setItem('token',jsn.auth_token)
            navigate('/')
          }
          else{
            alert("incorrect credentials")
          }
        }
    return(
        <div>
        <form onSubmit={handle}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" name="name" aria-describedby="emailHelp" value={credentials.name} onChange={onChange} placeholder="enter name"/>

        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Age</label>
          <input type="text" className="form-control" id="exampleInputEmail1" name="age" aria-describedby="emailHelp" value={credentials.age} onChange={onChange} placeholder="Enter age"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
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