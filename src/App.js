import React from "react";
import Header from "./components/Header";
import Landing from "./Landing";

import HeadLine from "./HeadLine";
import Contact from "./ContactFrom";
import Projects from "./Projects";
import Footer from "./components/Footer";
import WA from "./components/WA";




export default function App() {
  
  return (
    <div className="father">
      <Header />
      <Landing />
     
      <div className="container">
        <HeadLine />
        <Contact />
        
      </div>
      <Projects/>
      <Footer/>
      <WA />
    </div>
  );
}
