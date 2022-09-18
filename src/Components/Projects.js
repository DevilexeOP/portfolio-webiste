import React from "react";
import "../Styles/project.css";
import Video from "../Showcase.mp4";
import About from "../abt.png";

export default function Projects(props) {
  return (
    <React.Fragment>
      <section id="projects">
        <h1
          id="project"
          style={{
            color: "#FFB800",
          }}
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-easing="linear"
        >
          {props.myProject}
        </h1>
        <div className="container">
          <video
            src={Video}
            id="video"
            autoPlay
            loop
            muted
            data-aos="zoom-in-right"
            data-aos-delay="1200"
            data-aos-easing="ease-in-sine"
          />
          <img
            src={About}
            alt="About"
            id="About"
            data-aos="zoom-in-left"
            data-aos-delay="1200"
            data-aos-easing="ease-in-sine"
          />
          <h4
            style={{
              color: "#FFB800",
            }}
            id="pro"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-sine"
            data-aos-delay="1500"
          >
            About this project
          </h4>
          <h5
            style={{
              color: "white",
            }}
            id="pros"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-sine"
            data-aos-delay="1600"
          >
            This is a Marketing Agency Website
          </h5>
          <h5
            style={{
              color: "white",
            }}
            id="pr"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-sine"
            data-aos-delay="1700"
          >
            This company Provides End - To - End
            <br /> Digital Marketing Solutions.
          </h5>
          <h5
            style={{
              color: "white",
            }}
            id="into"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-sine"
            data-aos-delay="1800"
          >
            They are into Web Development , Android & iOS Apps , Social Media
            Marketing SEO , Ad Campaigns , Logo Creation , Branding , UI/UX
            Designing
          </h5>
          <h6
            style={{
              color: "white",
            }}
            id="h6"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-sine"
            data-aos-delay="1900"
          >
            I had made this website using HTML,CSS,Bootstrap
          </h6>
          <a
            href="https://fire-master-app.herokuapp.com/"
            target={"_blank"}
            id="visit"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-sine"
            data-aos-delay="2000"
            rel="noreferrer"
          >
            Visit Website !
          </a>
        </div>
      </section>
    </React.Fragment>
  );
}
