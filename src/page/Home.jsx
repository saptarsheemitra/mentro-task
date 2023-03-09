import React, {useState} from "react";
import "./home.css";
import stars from "../assets/stars.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import arrow from "../assets/arrow.png";
import {data} from "../data.js";


function Home() {
  const [count, setCount] = useState(0);
  // const [url,setUrl] = useState();
  
  function increaseCount(){
    if (count<7){
      let x = count+1
      setCount(x);
      }
    else{
        setCount(0);
      }
  }
  function decreaseCount(){
    if (count>0){
    let x = count-1
    setCount(x);
    }
    else{
      setCount(7);
    }
  }
  return (
    // <>
    <div className="container">
      <div className="left-container">
        <div className="about" >
          <div className="points">{data[count].rating}</div>
          <div className="stars">
            <img src={stars} alt="" />
          </div>
          <div className="name">{data[count].name}</div>
          <div className="position">{data[count].position}</div>
          <div className="desc">{data[count].about}</div>
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
                <img className="people-img" src={p7} alt="" />
              </div>
            </div>
            <div className="item">
              <div className="dot">
                <img className="people-img" src={p8} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="box1">
          <div id="prev-temp" onClick={decreaseCount}>
            <img className="arrow-left" src={arrow} alt="" />
          </div>
          <div>
            <img className="profile-img" src={p1} alt="" />
          </div>
          <div id="next-temp" onClick={increaseCount}>
            <img className="arrow-right" src={arrow} alt="" />
          </div>
        </div>
        <div className="pic-name">{data[count].name}</div>
      </div>
    </div>
    // </>
  );
}

export default Home;
