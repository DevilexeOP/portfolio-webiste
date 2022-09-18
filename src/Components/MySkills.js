import React from "react";
import "../Styles/skills.css";
import Des from "../designer.png";
import Front from "../frontend.png";
import comp1 from "../comp1.png";
import comp2 from "../comp2.png";

export default function MySkills(props) {
  return (
    <React.Fragment>
      <section id="mySkills">
        <div className="container"></div>
        <h1
          id="myskill"
          style={{
            color: "#FFB800",
          }}
          data-aos="fade-right"
          data-aos-delay="700"
          data-aos-easing="ease-in-sine"
        >
          {props.myskill}
        </h1>
        <img
          src={Des}
          alt=""
          id="Des"
          data-aos="zoom-in-down"
          data-aos-delay="1100"
          data-aos-easing="ease-in-sine"
        />
        <img
          src={Front}
          alt=""
          id="Front"
          data-aos="zoom-in-down"
          data-aos-delay="1100"
          data-aos-easing="ease-in-sine"
        />
        <p
          style={{
            color: "white",
          }}
          id="p"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-delay="1400"
        >
          Designer
        </p>
        <p
          style={{
            color: "white",
          }}
          id="p1"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-delay="1400"
        >
          Frontend Developer
        </p>
        <img
          src={comp1}
          alt=""
          id="comp1"
          data-aos="zoom-out-down"
          data-aos-delay="1500"
          data-aos-easing="ease-in-sine"
        />

        <img
          src={comp2}
          alt=""
          id="comp2"
          data-aos="zoom-out-down"
          data-aos-delay="1500"
          data-aos-easing="ease-in-sine"
        />
        <p
          style={{
            color: "white",
          }}
          id="p2"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-delay="1700"
          data-aos-offset="0"
        >
          Things I enjoy in Designing
        </p>
        <p
          style={{
            color: "white",
          }}
          id="p3"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-delay="1800"
          data-aos-offset="0"
        >
          UI/UX, Web, Apps, Logos,Posters
        </p>
        <p
          style={{
            color: "white",
          }}
          id="p4"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-delay="1900"
          data-aos-offset="0"
        >
          Tools I use
        </p>
        <p
          style={{
            color: "white",
          }}
          id="p5"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-delay="2000"
          data-aos-offset="0"
        >
          Adobe XD
        </p>
        <p
          style={{
            color: "white",
          }}
          id="p5"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-delay="2100"
          data-aos-offset="0"
        >
          Figma
        </p>
        <p
          style={{
            color: "white",
          }}
          id="p5"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-delay="2200"
          data-aos-offset="0"
        >
          Adobe Photoshop
        </p>
        <p
          style={{
            color: "white",
          }}
          id="p5"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-delay="2300"
          data-aos-offset="0"
        >
          Adobe Illustrator
        </p>
        <p
          style={{
            color: "white",
          }}
          id="p6"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-delay="1700"
          data-aos-offset="0"
        >
          Languages I speak
        </p>
        <p
          style={{
            color: "white",
          }}
          id="p7"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-delay="1800"
          data-aos-offset="0"
        >
          Html,Css,Javascript,React
        </p>
        <p
          style={{
            color: "white",
          }}
          id="p8"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-delay="1900"
          data-aos-offset="0"
        >
          Dev Tools I use
        </p>
        <p
          style={{
            color: "white",
          }}
          id="p9"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-delay="2000"
          data-aos-offset="0"
        >
          Visual Studio Code IDE
        </p>

        <p
          style={{
            color: "white",
          }}
          id="p9"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-delay="2200"
          data-aos-offset="0"
        >
          Git / GitHub
        </p>
        <p
          style={{
            color: "white",
          }}
          id="p9"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-delay="2300"
          data-aos-offset="0"
        >
          Heroku
        </p>
      </section>
    </React.Fragment>
  );
}
