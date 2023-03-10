import React, {useState } from "react";
import "./home.css";
import arrow from "../assets/arrow.png";
import { data } from "../data.js";
import Carousel from "../component/Carousel";
import LeftContainer from "../component/LeftContainer";

function Home() {
  const [count, setCount] = useState(0);


  const increaseCount = () => {
    if (count < 7) {
      let x = count + 1;
      setCount(x);
    } else {
      setCount(0);
    }
  };

  const decreaseCount = () => {
    if (count > 0) {
      let x = count - 1;
      setCount(x);
    } else {
      setCount(7);
    }
  };

  return (
    <div className="container">
      <LeftContainer rating={data[count].rating} name={data[count].name} position={data[count].position} desc={data[count].about} />
      <div className="right-container">
        <div className="curve-concave">
          <div className="concave" />
        </div>
        <div className="curve-convex">
          <div className="convex" />
        </div>
        <div className="left-cover" />
        <div className="right-cover" />
        <Carousel/>
        <div className="box1">
          <div id="prev-temp" onClick={decreaseCount}>
            <img className="arrow-left" src={arrow} alt="" />
          </div>
          <div>
            <img className="profile-img" src={data[count].img} alt="" />
          </div>
          <div id="next-temp" onClick={increaseCount}>
            <img className="arrow-right" src={arrow} alt="" />
          </div>
        </div>
        <div className="pic-name">{data[count].name}</div>
      </div>
    </div>
  );
}

export default Home;
