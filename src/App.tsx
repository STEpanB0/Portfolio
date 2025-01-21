import React , {useRef , useEffect}from 'react';
import './App.css';
import  Header  from "./Components/Header/Header";
import  Main  from "./Components/Main/Main";
import  About  from "./Components/About/About";
import  Works  from "./Components/Works/Works";
import  FormSection  from "./Components/FormSection/FormSection";
import  Footer  from "./Components/Footer/Footer";
import scrollStore from "./Store/ScrollStore";
function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scrollStore.setRef('home', homeRef);
    scrollStore.setRef('about', aboutRef);
    scrollStore.setRef('contact', contactRef);
}, []);
  return (
    <div className="App">
      <Header 
        onScrollToHome={() => scrollStore.scrollToTarget('home')}
        onScrollToAbout={() => scrollStore.scrollToTarget('about')}
        onScrollToContact={() => scrollStore.scrollToTarget('contact')}
      />
      <div ref={homeRef}>
        <Main />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <Works></Works>
      <div ref={contactRef}>
        <FormSection/>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default App;
