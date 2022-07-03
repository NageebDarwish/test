import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg'


export default function Header() {
  const [isOpen, open] = React.useState(true);

  function handleclick() {
    open((isOpen) => !isOpen);
  }

  

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      document.querySelector("header").classList.add("header-background");
    } else {
      document.querySelector("header").classList.remove("header-background");
    }
  });

  return (
    <div className="header-back">
      <header className="container">
        <nav>
          <a href="#">
            <img src={logo} alt="Icom Logo" className="logo" />
          </a>
          <ul>
            <a href="https://icom-digital.com/" className="nav-links">
              <li>الرئيسية</li>
            </a>
            <a href="#about" className="nav-links">
              <li>عن الشركة</li>
            </a>
            <a href="#portfolio">
              <li>خدماتنا</li>
            </a>
           
          </ul>
          <a href="#contact-us">
            <p className="contact-us">اتصل بنا</p>
          </a>
          <i
            className={`fa-solid fa-bars ${isOpen ? "showmenu" : "hidemenu"}`}
            onClick={handleclick}
          ></i>
        </nav>
        <div className={`${isOpen ? "notmenu" : "menu"} new-nav`}>
        
          <div>
          <i
              className={`fa-solid fa-x ${isOpen ? "hidemenu" : "showmenu"}`}
              onClick={handleclick}
            ></i>
            <ol>
            <i className="fa-solid fa-xmark-large"></i>
              <a href="https://icom-digital.com/">
                <li
                  className={`nav-links-new ${
                    isOpen ? "hidemenu" : "showmenu"
                  }`}
                >
                  الرئيسية
                </li>
              </a>
              <a href="#about">
                <li
                  className={`nav-links-new ${
                    isOpen ? "hidemenu" : "showmenu"
                  }`}
                >
                  عن الشركة
                </li>
              </a>
              <a href="#portfolio">
                <li
                  className={`nav-links-new ${
                    isOpen ? "hidemenu" : "showmenu"
                  }`}
                >
                  خدماتنا
                </li>
              </a>
              
            </ol>
            <div className="bottom-icons icons-menu" dir="ltr">
              <a href="https://www.instagram.com/icom.digital/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/IcomDigitalAgency/">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://wa.me/+963991070885">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
            
          </div>
        </div>
      </header>
    </div>
  );
}
