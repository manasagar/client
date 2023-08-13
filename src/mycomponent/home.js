import React, { useEffect,useContext,useRef,useState } from "react";
import noteContext from "../hooks/notes/contextnote";
import Note from "./note"
import AddNote from "./addnote";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const context=useContext(noteContext);
   const {notes,getnotes,editnote}=context;

const [curNote,setNote]=useState({_id:"",etitle:"",edescription:""})

let navigation=useNavigate()
   useEffect(()=>{
    if(localStorage.getItem('token')){
     // 5>4?console.log("ty"):console.log("vi")
    getnotes()
}
else{
navigation('/login')
}
return
   },[])// eslint-disable-line react-hooks/exhaustive-deps
   const ref=useRef(null)
   const refclose=useRef(null)
   const updateNote=(currentNote)=>{
    ref.current.click()
    setNote({_id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description})
   }
   const handleclick=(e)=>{
    console.log(curNote)
    //e.preventDefault();
    editnote(curNote._id,curNote.etitle,curNote.edescription)
    refclose.current.click();
    
  }
  const onChange=(e)=>{
  setNote({...curNote,[e.target.name]:e.target.value})
  
  //console.log(Note)
  }
 
    return(
      
        <div>
        
        <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
        <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Note edit</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form>
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">title</label>
            <input type="text" className="form-control" id="etitle" name="etitle"  value={curNote.etitle} aria-describedby="emailHelp" placeholder="Enter title" onChange={onChange}/>
            
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputPassword1">description</label>
            <input type="text" className="form-control" id="edescription" name="edescription"  value={curNote.edescription} placeholder="description" onChange={onChange}/>
            </div>
            </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" ref ={refclose}data-bs-dismiss="modal">Close</button>
              <button disabled= {curNote.edescription.length<5||curNote.etitle.length<1 } type="button" onClick={()=>{handleclick()}} className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
        <AddNote/>
        <h1>you notes</h1>
        <div className="  mx-3">
        {notes.length===0&&'no notes to display'}
         {
         notes.map((no)=>{
             return <Note note={no} updateNote={updateNote} key={no._id}/>
             
        })
     }
     </div>
        </div>
    )
}