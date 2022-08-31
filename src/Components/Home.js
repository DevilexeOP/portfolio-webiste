import React from "react";
import "../Styles/home.css";
import Img from "../bg.png";
import Stroke from "../stroke.png";

export default function Home(props) {
  document.body.style = "background: #0F0F0F;";
  return (
    <>
      <div className="container">
        <h1
          style={{
            color: "#FFB800",
          }}
          id="head"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-easing="ease-in-sine"
        >
          {props.head}
        </h1>
        <h1
          style={{
            color: "#FFB800",
          }}
          id="header"
          data-aos="fade-right"
          data-aos-delay="1000"
          data-aos-easing="ease-in-sine"
        >
          {props.header}
        </h1>
      </div>
      <img
        src={Img}
        alt="Image"
        id="backgroundImg"
        data-aos="zoom-out-left"
        data-aos-delay="1000"
        data-aos-easing="ease-in-sine"
      />
      <img
        src={Stroke}
        alt="Image"
        id="Stroke"
        data-aos="fade-right"
        data-aos-delay="1200"
        data-aos-easing="ease-in-sine"
      />
      <h4
        style={{
          color: "white",
        }}
        id="con"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-sine"
        data-aos-delay="1500"
        data-aos-offset="0"
      >
        {props.con}
      </h4>
      <h4
        style={{
          color: "#FFB800",
        }}
        id="content"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-sine"
        data-aos-delay="1600"
        data-aos-offset="0"
      >
        {props.content}
      </h4>
      <br />
      <h4
        style={{
          color: "white",
        }}
        id="para"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-sine"
        data-aos-delay="1700"
        data-aos-offset="0"
      >
        {props.para}
      </h4>
      <h4
        style={{
          color: "white",
        }}
        id="paragraph"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="1800"
        data-aos-offset="0"
      >
        {props.paragraph}
      </h4>
    </>
  );
}
