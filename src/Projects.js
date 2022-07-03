import React from "react";
import { ReactDOM } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Lightbox from "react-image-lightbox";

import "react-image-lightbox/style.css";
import { useState } from "react";

import Carousel from "react-elastic-carousel";
import Item from "./components/Item";
import "./components/styles.css"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const images = [
    { title: "تصميم و برمجة مواقع الويب", caption: "1", url: require("./assets/projects/web/servant/MergedImages.png") },
    { title: "تصميم وبرمجة  تطبيقات الهاتف المحمول", caption: "2", url: require("./assets/projects/mobile/donuts/MergedImages (1).jpg") },
    { title: "التسويق عبر منصات التواصل الاجتماعي", caption: "3", url: require("./assets/projects/social/perfumes/MergedImages.jpg") },
    { title: "تصميم العلامة التجاربة", caption: "4", url: require("./assets/projects/branding/chef-gabi/MergedImages (4).jpg") },
    { title: "تصميم داخلي", caption: "5", url: require("./assets/projects/interior/inner/MergedImages (2).jpg") }
  ];


  

export default function Projects() {
    const [isOpen, setIsOpen] = useState(false);
    const [imgIndex, setImgIndex] = useState(0);
    const [flag, setFlag] = useState(0)
      
  return (
    
   
    <div id="portfolio" name="portfolio">
      
        {isOpen  && <Lightbox
            imageTitle={flag === 0 ? images[0].title : flag === 1 ? images[1].title : flag === 2 ? images[2].title : flag === 3 ? images[3].title : flag === 4 ? images[4].title : images[imgIndex].title}
            imageCaption={flag === 0 ? images[0].caption : flag === 1 ? images[1].caption : flag === 2 ? images[2].caption : flag === 3 ? images[3].caption : flag === 4 ? images[4].caption : images[imgIndex].caption}
            mainSrc={ flag === 0 ? images[0].url : flag === 1 ? images[1].url : flag === 2 ? images[2].url : flag === 3 ? images[3].url : flag === 4 ? images[4].url : images[imgIndex].url }
            onCloseRequest={() => setIsOpen(false)}
            enableZoom = {false}
            
            onMovePrevRequest={() => setImgIndex((imgIndex + images.length - 1) % images.length)}
            onMoveNextRequest={() => setImgIndex((imgIndex + 1) % images.length)}
            />}

<h1>اعمالنا</h1>
 
      <div className="App App-back container"> 

      
     
        <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={1500}>
          <Item className="item">
          <button onClick={() => {
            setFlag(0)
            setIsOpen(true)
            
          } }> <img src={require("./assets/projects/web/servant/0.png")}/>
      </button>
            
         
                    <p style={{bottom:"2.5rem"}}> تصميم و برمجة مواقع الويب </p>
          </Item>
          <Item className="item">
          <button onClick={() => {setFlag(1)
            setIsOpen(true)
            
          }}> <img src={require("./assets/projects/mobile/donuts/0.jpg")} className='custom-img'/></button> 
                    <p style={{bottom:"2.5rem"}}>تصميم وبرمجة التطبيقات</p>
                    
          </Item>
          <Item className="item">
          <button onClick={() => {
            setFlag(2)
            setIsOpen(true)
            
          }}> <img src={require("./assets/projects/social/perfumes/0.png") }/></button> 
                    <p style={{textAlign:"center"}}>التسويق عبر منصات<br/> التواصل الاجتماعي</p>
          </Item>
          <Item className="item">
          <button onClick={() => {
            setFlag(3)
            setIsOpen(true)
            
          }}> <img src={require("./assets/projects/branding/chef-gabi/0.jpg")}/></button> 
                    <p style={{textAlign:"center"}}>تصميم العلامة التجاربة <br/> والهوية البصرية </p>
                    
          </Item>
          <Item className="item">
          <button onClick={() => {
            setFlag(4)
            setIsOpen(true)
            
          }}>   <img src={require("./assets/projects/interior/inner/0.jpg")}/></button>
                    <p style={{bottom:"2.5rem"}}>تصميم داخلي</p>
          </Item>
        </Carousel>
        <a href="https://icom-digital.com/#services" className="all-projects">عرض كافة الاعمال</a>
      </div>
      
    </div>
 );
}



       
