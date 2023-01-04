import './App.css';
import React from "react";
import AppBar from "./AppBar";
import About from "./About";
import Portfolio from "./Portfolio";
import ToolBox from './Toolbox';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return(<>
    <AppBar/>
    <section className="container">
    <About/>
    <Portfolio/>
    <ToolBox/>
    </section>

    <section id="contact">
      <Contact/>
    </section>

    <section id="footer">
      <Footer/>
    </section>
    </>
  );
}
 
export default App;
