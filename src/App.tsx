import React from 'react';
import './App.css';
import  Header  from "./Components/Header/Header";
import  Main  from "./Components/Main/Main";
import  About  from "./Components/About/About";
import  Works  from "./Components/Works/Works";
import  FormSection  from "./Components/FormSection/FormSection";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <About></About>
      <Works></Works>
      <FormSection></FormSection>
    </div>
  );
}

export default App;
