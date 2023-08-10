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

    const [notes,setNotes]=useState(intialnotes)
    return(
        <NoteContext.Provider value={{notes:notes,setNotes:setNotes}}>
        {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;