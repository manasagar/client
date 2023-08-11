import React from "react";
import { useContext } from "react";
import noteContext from "../hooks/notes/contextnote";
import Note from "./note"
import AddNote from "./addnote";
export default function Home(){
    const context=useContext(noteContext);
   const {notes}=context;
    return(

        <div>
        
           
  
        <AddNote/>
        <h1>you notes</h1>
        <div className="  mx-3">
         {
         notes.map((no)=>{
             return <Note note={no} key={no._id}/>
             
        })
     }
     </div>
        </div>
    )
}