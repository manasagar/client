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
    <Header title="To do list" search={false}/>
    <div className='container'>
    <Routes>
    <Route exact path="/about" element={
      <div>
        
        <ABOUT/>
       </div>
    }

    />
     
    
    <Route exact path="/" element={
      
        <div>
        
     <Home/>
     
        </div>
      
      }/>
      
      
  </Routes>
  </div>
  <Footer/>
     </Router>
     </NoteState>
  </div>
 
  );
}

export default App;
