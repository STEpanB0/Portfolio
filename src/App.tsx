import React from 'react';
import './App.css';
import  Header  from "./Components/Header/Header";
import  Main  from "./Components/Main/Main";
import  About  from "./Components/About/About";
import  Works  from "./Components/Works/Works";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <About></About>
      <Works></Works>
    </div>
  );
}

export default App;
