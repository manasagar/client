import './App.css';
import ABOUT from './mycomponent/about';
import Home from './mycomponent/home';
import Header from './mycomponent/header';
import Footer  from './mycomponent/footer';
import NoteState from './hooks/notes/noteState';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Alert from './mycomponent/alert';
import Login from './mycomponent/login';
import Signup from './mycomponent/signup';


function App() {
    

  return (
    
    
    <div>
    <NoteState>
    <Router>
    <Header />
  <Alert alert="No errors enjoy"/>
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
      
      <Route exact path="/signup" element={<Signup/>}
      />
      <Route exact path="/login" element={ <Login/>}/>
     
      
  </Routes>
  </div>
  <Footer/>
     </Router>
     </NoteState>
  </div>
 
  );
}

export default App;
