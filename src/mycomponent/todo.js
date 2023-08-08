import React from "react";
export default function Todo(prop){
    return(
        <div className="container">
        {prop.x.author}

        <h3>{prop.x.title}
        </h3>
         <button className="btn btn-sm btn-danger" onClick={()=>{prop.y(prop.x)}}>delete</button>
        </div>
    )
}