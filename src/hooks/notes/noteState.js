import NoteContext from "./contextnote"
import { useState } from "react"
const NoteState=(props)=>{
    const intialnotes=[
        {
            "_id": "64cf75640408e304b2a2fc33",
            "user": "64cf74c70408e304b2a2fc30",
            "title": "firstnote",
            "description": "first note title",
            "__v": 0
        },
        {
            "_id": "64cf75cf0408e304b2a2fc35",
            "user": "64cf74c70408e304b2a2fc30",
            "title": "firstnote",
            "description": "first note title",
            "__v": 0
        },
        {
            "_id": "64cf75d00408e304b2a2fc37",
            "user": "64cf74c70408e304b2a2fc30",
            "title": "firstnote",
            "description": "first note title",
            "__v": 0
        },
        {
            "_id": "64cf76925be25d5277298350",
            "user": "64cf74c70408e304b2a2fc30",
            "title": "firstnote",
            "description": "first note title",
            "__v": 0
        },
        {
            "_id": "64d22e7576e951edd57f9e3e",
            "user": "64cf74c70408e304b2a2fc30",
            "title": "firstnote",
            "description": "first note title",
            "__v": 0
        }
    ]
//create
const addnote=(Newnote)=>{
    console.log("creating note")
let note= {
    "_id": "64cf75640404b2a2fc33",
    "user": "64cf74c70408e94b2a2fc30",
    "title": "firstnote",
    "description": "first note title",
    "__v": 0
};
setNotes(notes.concat(note))
}
//edit
const editnote=(id)=>{

}
//delete
const deletenote=()=>{

}
    const [notes,setNotes]=useState(intialnotes)
    return(
        <NoteContext.Provider value={{notes,addnote,deletenote,editnote}}>
        {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;