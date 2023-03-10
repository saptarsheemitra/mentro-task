import React from 'react'
import "../page/home.css";
import stars from "../assets/stars.png";

function LeftContainer(props) {
    console.log(props)
  return (
    <div className="left-container">
    <div className="about">
        <div className="points">{props.rating}</div>
      <div className="stars">
        <img src={stars} alt="" />
      </div>
      <div className="name">{props.name}</div>
      <div className="position">{props.position}</div>
      <div className="desc">{props.desc}</div>
    </div>
    <div>
      <button className="book-btn">Book a session</button>
    </div>
  </div>
  )
}

export default LeftContainer