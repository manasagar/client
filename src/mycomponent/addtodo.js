import React, { useState,useEffect } from "react";
export default function AddTodo(props){
   const [title,set_title]=useState("");
   const [desc,set_desc]=useState("");
const changetext=(e)=>{
e.preventDefault();
if(!title||!desc){
    alert("error")
}
else{
    props.add(title,desc)
    set_title("")
    set_desc("")
}
}
    return(
        <form onSubmit={changetext}>
        <div className="my-3">
          <h3 >AddTodo</h3>
          <label  className="form-label">todo label</label>
          <input type="text" value={title} onChange={(e)=>{set_title(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          
          <label  className="form-label">todo description</label>
          <input type="text" value={desc} onChange={(e)=>{set_desc(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
         
        </div>
       
       
        <button type="submit" className="btn btn-sm btn-success">Create</button>
      </form>
    );
}