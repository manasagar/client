import React from "react";
import Todo from './todo';
export default function Todos(props){
    return(
        <div>
      <h2 className="text-center">to do list</h2>

      {props.item.length!==0?props.item.map((item)=>{
       return( <Todo x={item} key={item.slug} y={props.ondel}/>)
      }):<h2 className="text-center my-3">fill</h2>}
       
        </div>
    )
}