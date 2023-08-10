import React from "react";
import { useContext } from "react";
import noteContext from "../hooks/notes/contextnote";
import Note from "./note"
export default function Home(){
    const context=useContext(noteContext);
   const {notes,setNotes}=context;
    return(

        <div>
        
            {console.log(setNotes)}
        <div className="container my-3">
        <h1>create note</h1>
        <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
        
        <h1>you notes</h1>
        <div className="row my-3">
         {
         notes.map((note)=>{
             return <Note note={note} key={note._id}/>
             
        })
     }
     </div>
        </div>
    )
}