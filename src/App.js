import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
// import About from './components/About';
import React from 'react';

function App() {
  const [mode, setmode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#1a355d";
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  }
return (
  <>
    <Navbar Title="Text Utils" About="About" mode={mode} toggleMode = {toggleMode} />
    <div className="container my-5">
      <TextForm heading="Enter the heading here" mode = {mode} />
    </div>
    {/* <About/> */}
  </>
);
}


export default App;
