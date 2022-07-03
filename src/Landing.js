import React from "react";
import { Link } from "react-router-dom";
import Index from "./components/index";

export default function Landing() {
  return (
    <section className="landing">
      <div className="icom-landing container">
        <div className="icom-info">
          <div className="title">
            <h1>هل تريد النهوض بعلامتك </h1>
            <h1>التجارية نحو التميز!</h1>
            <h3>icom ستساعدك لتحقيق اهدافك</h3>
          </div>
        </div>
        <Index/>
      </div>
      <a href="#about" className="projects">
        <i className="fas fa-angle-double-down fa-2x"></i>
      </a>
      
    </section>
  );
}
