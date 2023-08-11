import React, {useContext,useState}from "react";
import noteContext from "../hooks/notes/contextnote";
export default function AddNote(props){
const context=useContext(noteContext)
const {addnote}=context
const [Note,setNote]=useState({title:"",description:""})
const handleclick=(e)=>{
  e.preventDefault();
  addnote(Note)
}
const onChange=(e)=>{
setNote({...Note,[e.target.name]:e.target.value})
//console.log(Note)
}
  return(
  <div className="container my-3">
  <h1>create note</h1>
  <form>
<div className="form-group">
<label htmlFor="exampleInputEmail1">title</label>
<input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder="Enter title" onChange={onChange}/>

</div>
<div className="form-group">
<label htmlFor="exampleInputPassword1">description</label>
<input type="text" className="form-control" id="description" name="description" placeholder="description" onChange={onChange}/>
</div>
<div className="form-check">
<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
</div>
<button type="submit" className="btn btn-primary" onClick={handleclick}>Submit</button>
</form>
  </div>
    );
}