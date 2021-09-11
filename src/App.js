import React, { useState } from 'react'
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {

  const [Mode, setMode] = useState('light');

  const [input, setInput] = useState("Enable dark mode");

  const [alert, setAlert] = useState(null);

  const showAlert = (messege, type) => {
    setAlert({
      
      msg: messege,
      type: type,

    })

    setTimeout(()=>{

      setAlert(null);
    },2000)
  }

  const toggle = () => {

    if(Mode === 'light'){
      setMode('dark');
      setInput("Enable light mode");
      document.body.style.backgroundColor = "#354038";
      showAlert("Dark Mode Enabled","success");
    }
    else{
      setMode('light');
      setInput("Enable dark mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled","success");
    }
  }
  

  return ( 
  <>
  <Router>
   <Navbar title="PREETAM_TEXT" about="about" mode= {Mode}  toggleMode = {toggle} Input = {input}/>
   <Alert Alert = {alert}/>
      <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
          <TextForm title="Enter the text here" Alert = {showAlert}/>
          </Route>
     </Switch>
 
  </Router>
  
  </>
  );
}

export default App;
