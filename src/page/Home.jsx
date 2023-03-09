import React, {useEffect} from "react";
import "./home.css";
import stars from "../assets/stars.png";
import p1 from "../assets/p1.png";
import arrow from "../assets/arrow.png";
// import {data} from "../data.js";


function Home() {

  return (
    // <>
    <div className="container">
      <div className="left-container">
        <div className="about">
          <div className="points">4.9</div>
          <div className="stars">
            <img src={stars} alt="" />
          </div>
          <div className="name">Pankur Gupta</div>
          <div className="position">SDE @Amazon</div>
          <div className="desc">
            I am Prankur Gupta, I am working as a Software Development Engineer
            at Amazon. I can guide you throughout your preparation phase. Trust
            me when I tell you this I know the exact recipe to crack the coding
            interview rounds of top companies for the SDE role.
          </div>
        </div>
        <div>
          <button className="book-btn">Book a session</button>
        </div>
      </div>
      <div className="right-container">
        <div className="curve-concave">
          <div className="concave" />
        </div>
        <br />
        <div className="curve-convex">
          <div className="convex" />
        </div>
        <div className="left-cover" />
        <div className="right-cover" />
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
                <img className="people-img" src={p1} alt="" />
              </div>
            </div>
            <div className="item">
              <div className="dot">
                <img className="people-img" src={p1} alt="" />
              </div>
            </div>
            <div className="item">
              <div className="dot">
                <img className="people-img" src={p1} alt="" />
              </div>
            </div>
            <div className="item">
              <div className="dot">
                <img className="people-img" src={p1} alt="" />
              </div>
            </div>
            <div className="item">
              <div className="dot">
                <img className="people-img" src={p1} alt="" />
              </div>
            </div>
            <div className="item">
              <div className="dot">
                <img className="people-img" src={p1} alt="" />
              </div>
            </div>
            <div className="item">
              <div className="dot">
                <img className="people-img" src={p1} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="box1">
          <div id="prev-temp">
            <img className="arrow-left" src={arrow} alt="" />
          </div>
          <div>
            <img className="profile-img" src={p1} alt="" />
          </div>
          <div id="next-temp">
            <img className="arrow-right" src={arrow} alt="" />
          </div>
        </div>
        <div className="pic-name">Prankur Gupta</div>
      </div>
    </div>
    // </>
  );
}

export default Home;
