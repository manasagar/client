import React from "react";

export default function Note(props){
   const {note} = props;
    return(
        
       

       <div className="row-md-3">
        
        <div className="card">
           <div className="card-body">
           <div className="d-flex">
              <h5 className="card-title">{note.title}</h5>
              <i className="fa-solid fa-trash mx-2"></i>
              <i className="fa-solid fa-pen-to-square mx-3"></i>
              </div>
              <p className="card-text">{note.description}</p>
              </div>
            
            </div>
            </div>
         
    )
}