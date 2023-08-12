import React,{useContext} from "react";
import noteContext from "../hooks/notes/contextnote";
export default function Note(props){
   const {note,updateNote} = props;
   const context=useContext(noteContext)
   const{deletenote}=context;
    return(
        
       

       <div className="row-md-3">
        
        <div className="card">
           <div className="card-body">
           <div className="d-flex">
              <h5 className="card-title">{note.title}</h5>
              <i className="fa-solid fa-trash mx-2" onClick={()=>{deletenote(note._id)}}></i>
              <i className="fa-solid fa-pen-to-square mx-3" onClick={()=>{updateNote(note)}}></i>
              </div>
              <p className="card-text">{note.description}</p>
              </div>
            
            </div>
            </div>
         
    )
}