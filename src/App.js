import logo from './logo.svg';
import './App.scss';
import { useRoutes } from 'react-router-dom';
import { Button } from 'reactstrap';
import drawer from "../src/Assets/drawer.png"
import { useState } from 'react';
import Navbar from './components/Navbar';
function App() {
  const [toggle, setToggle]=useState(false)

  return (
    <div className="App">
      
      <div className={toggle ? "navbar-divopen" : "navbar-divclose"}>
      <div className={toggle ? "drawer-divopen" : "drawer-divclose"}>
      <img src={drawer} className="drawer-img" onClick={()=> {setToggle(!toggle)}}></img>
      </div>
      <Navbar></Navbar>
      </div>
       <div className={toggle ? "content-divopen" : "content-divclose"}>
        hello
       </div>
      
    </div>
  );
}

export default App;
