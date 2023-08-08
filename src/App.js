import './App.css';
import ABOUT from './mycomponent/about';
import AddTodo from './mycomponent/addtodo';
import Header from './mycomponent/header';
import Footer  from './mycomponent/footer';
import Todos from './mycomponent/todos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React,{useState,useEffect} from 'react';


function App() {
    
let initTodos;
    if(localStorage.getItem("todos")===null){
        initTodos=[]
    }
    else{
        initTodos=JSON.parse(localStorage.getItem("todos"));
    }
    const [blogs,setBlog]=useState(
        initTodos
    )
useEffect(()=>{
  localStorage.setItem( "todos",JSON.stringify(blogs));
},[blogs])

const add=(title,desc)=>{
console.log(title,desc)
let sl=0
if(blogs.length!==0){
 sl=blogs[blogs.length-1].slug+1
}

const nitem={
    title:title,
            author:"god",
            description:desc,
            slug:sl
}
setBlog([...blogs,nitem])

}
  const del=(p)=>{
    console.log("deleted")
    console.log(p)
setBlog(blogs.filter((e)=>{
return p!==e
}))

  }
  return (
    
    
    <div>
    <Router>
    <Routes>
    <Route exact path="/about" element={
      <div>
         <Header title="To do list" search={false}/>
        <ABOUT/>
       </div>
    }

    />
     
    
    <Route exact path="/" element={
      
        <div>
        <Header title="To do list" search={false}/>
     <AddTodo add={add}/>
     <Todos item={blogs} ondel={del}/>
     <Footer/>
        </div>
      
      }/>
      
   
  </Routes>


     </Router>
  </div>
 
  );
}

export default App;
