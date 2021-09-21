import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils - Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now!';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    <Router>
    <Navbar title = "TextUtils2" aboutText = "About" mode={mode} toggleMode={toggleMode}/>
    {/* <Navbar/> */}
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
    {/* Remember you must use an ‘exact’ parameter with the Route component as it disables the partial matching of the route and makes sure that it only returns the route if the path is exact. 
    /users ---> component 1
    /users/home --- component 2 */}

      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/">
        <TextForm showAlert = {showAlert} heading="Enter the text to analyze" mode={mode}/>
      </Route>
    </Switch>
     </div>
     </Router>
    </> 
  );
}

export default App;