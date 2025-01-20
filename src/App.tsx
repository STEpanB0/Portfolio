import React from 'react';
import './App.css';
import  Header  from "./Components/Header/Header";
import  Main  from "./Components/Main/Main";
import  About  from "./Components/About/About";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <About></About>
    </div>
  );
}

export default App;
