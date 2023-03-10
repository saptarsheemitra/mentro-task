import React from "react";
import "../page/home.css";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
function Carousel() {
  return (
    <>
      <div className="canvas-dots circle-carousel" data-speed={2000}>
        <div className="slides">
          <div className="slide">{/* <h2>Slide 1</h2> */}</div>
          <div className="slide">{/* <h2>Slide 2</h2> */}</div>
          <div className="slide">{/* <h2>Slide 3</h2> */}</div>
          <div className="slide">{/* <h2>Slide 4</h2> */}</div>
          <div className="slide">{/* <h2>Slide 5</h2> */}</div>
          <div className="slide">{/* <h2>Slide 5</h2> */}</div>
          <div className="slide">{/* <h2>Slide 5</h2> */}</div>
          <div className="slide">{/* <h2>Slide 5</h2> */}</div>
        </div>
        <div className="pagination">
          <div className="item">
            <div className="dot">
              <img className="people-img" src={p1} alt="" />
            </div>
          </div>
          <div className="item">
            <div className="dot">
              <img className="people-img" src={p2} alt="" />
            </div>
          </div>
          <div className="item">
            <div className="dot">
              <img className="people-img" src={p3} alt="" />
            </div>
          </div>
          <div className="item">
            <div className="dot">
              <img className="people-img" src={p4} alt="" />
            </div>
          </div>
          <div className="item">
            <div className="dot">
              <img className="people-img" src={p5} alt="" />
            </div>
          </div>
          <div className="item">
            <div className="dot">
              <img className="people-img" src={p6} alt="" />
            </div>
          </div>
          <div className="item">
            <div className="dot">
              <img className="people-img" src={p6} alt="" />
            </div>
          </div>
          <div className="item">
            <div className="dot">
              <img className="people-img" src={p6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
