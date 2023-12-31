import NoteContext from "./contextnote"
import { useState } from "react"
const NoteState=(props)=>{
    const host="http://localhost:5000"
    const getnotes=async()=>{
    const response = await fetch(`${host}/api/note/fetchallnotes?=`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth_token":localStorage.getItem('token')
        },
       
      });
      const jsn=await response.json()
    
      setNotes(jsn)
    }
      
     
    const intialnotes=[
        
    ]
//create
const addnote=async(title,description)=>{
   

const response = await fetch(`${host}/api/note/createnote`, {
    method: "POST",
    
    headers: {
      "Content-Type": "application/json",
      "auth_token":localStorage.getItem('token')
    },
    body: JSON.stringify({title,description}), // body data type must match "Content-Type" header
  });
  const jsn= await response.json()
setNotes(notes.concat(jsn))
}
//edit
const editnote= async (id,title,description)=>{
    console.log(title,description)
    const response = await fetch(`${host}/api/note/updatenote/${id}`, {
        method: "PUT",
        
        headers: {
          "Content-Type": "application/json",
          "auth_token":localStorage.getItem('token')
        },
        body: JSON.stringify({title,description}), // body data type must match "Content-Type" header
      });
      const jsn=await response.json()
      console.log(jsn)
      let newnotes=JSON.parse(JSON.stringify(notes))
      console.log(notes)
for(let i=0;i<notes.length;i++){
    if(newnotes[i]._id===id){
        newnotes[i].description=description;
        newnotes[i].title=title;
        break;
    }
}

setNotes(newnotes)
}
//delete
const deletenote=async(id)=>{
console.log(id)
const response = await fetch(`${host}/api/note/delete/${id}`, {
    method: "DELETE",
    
    headers: {
      "Content-Type": "application/json",
      "auth_token":localStorage.getItem('token')
    },
   // body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  const jsn=await response.json();
  console.log(jsn)
const newnotes=notes.filter((note)=>{return id!==note._id})

setNotes(newnotes)
}
    const [notes,setNotes]=useState(intialnotes)
    return(
        <NoteContext.Provider value={{notes,addnote,deletenote,editnote,getnotes}}>
        {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;