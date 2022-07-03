import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];


function index() {
  
  return (

    
    <div id="portfolioL" name="portfolio">
    
      <div className="App">
        <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={1500}>
          <Item className="item">
            <img src={require("../assets/image/web.jpg")} alt="image1" />
          </Item>
          <Item>
            <img
              src={require("../assets/image/mobile.jpg")}
              alt="image2"
            />
          </Item>
          <Item>
            <img
              src={require("../assets/image/marketing.jpg")}
              alt="image3"
            />
          </Item>
          <Item>
            <img
              src={require("../assets/image/logo.jpg")}
              alt="image4"
            />
          </Item>
          <Item>
            <img src={require("../assets/image/seo.jpg")} alt="image5" />
          </Item>
          <Item>
            <img src={require("../assets/image/interior.jpg")} alt="image5" />
          </Item>
          <Item>
            <img src={require("../assets/image/support.jpg")} alt="image5" />
          </Item>
        </Carousel>
      </div>
    </div>
  );
}

export default index