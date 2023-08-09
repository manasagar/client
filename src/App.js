import './App.css';
import ABOUT from './mycomponent/about';
import Home from './mycomponent/home';
import Header from './mycomponent/header';
import Footer  from './mycomponent/footer';
import NoteState from './hooks/notes/noteState';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
    

  return (
    
    
    <div>
    <NoteState>
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
     <Home/>
     <Footer/>
        </div>
      
      }/>
      
   
  </Routes>

     </Router>
     </NoteState>
  </div>
 
  );
}

export default App;
