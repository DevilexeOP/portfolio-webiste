import React from "react";
import "../Styles/about.css";
import img1 from "../reactjs.png";
import img2 from "../html.png";
import img3 from "../css.png";
import img4 from "../js.png";

export default function About(props) {
  return (
    <React.Fragment>
      <section id="about">
        <h2
          id="abt"
          style={{
            color: "#FFB800",
          }}
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-easing="linear"
        >
          {props.title}
        </h2>
        <div className="container">
          <img
            src={img1}
            alt=""
            id="img1"
            data-aos="zoom-in-down"
            data-aos-delay="1100"
            data-aos-easing="ease-in-sine"
          />
          <img
            src={img2}
            alt=""
            id="img2"
            data-aos="zoom-in-down"
            data-aos-delay="1200"
            data-aos-easing="ease-in-sine"
          />
          <img
            src={img3}
            alt=""
            id="img3"
            data-aos="zoom-in-down"
            data-aos-delay="1300"
            data-aos-easing="ease-in-sine"
          />
          <img
            src={img4}
            alt=""
            id="img4"
            data-aos="zoom-in-down"
            data-aos-delay="1400"
            data-aos-easing="ease-in-sine"
          />
          <h4
            style={{
              color: "white",
            }}
            id="para1"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-sine"
            data-aos-delay="1500"
            data-aos-offset="0"
          >
            {props.para1}
          </h4>
          <h4
            style={{
              color: "white",
            }}
            id="para2"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-sine"
            data-aos-delay="1600"
            data-aos-offset="0"
          >
            {props.para2}
          </h4>
          <h4
            style={{
              color: "white",
            }}
            id="para02"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-sine"
            data-aos-delay="1700"
            data-aos-offset="0"
          >
            {props.para02}
          </h4>
          <h4
            style={{
              color: "white",
            }}
            id="para03"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-sine"
            data-aos-delay="1800"
            data-aos-offset="0"
          >
            {props.para03}
          </h4>
          <h4
            style={{
              color: "white",
            }}
            id="para3"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-sine"
            data-aos-delay="1800"
            data-aos-offset="0"
          >
            {props.para3}
          </h4>
          <h4
            style={{
              color: "white",
            }}
            id="para4"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-sine"
            data-aos-delay="1900"
            data-aos-offset="0"
          >
            {props.para4}
          </h4>
        </div>
      </section>
    </React.Fragment>
  );
}
