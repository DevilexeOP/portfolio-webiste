import React from "react";
import "../Styles/footer.css";
import logo from "../navimg.png";
import linkedIn from "../linkedIn.png";
import github from "../github.png";
import twitter from "../twitter.png";
import instagram from "../insta.png";

export default function Footer(props) {
  return (
    <React.Fragment>
      <section id="footer">
        <img
          src={logo}
          alt="logo"
          id="footer-logo"
          data-aos="zoom-out-down"
          data-aos-delay="1200"
          data-aos-easing="ease-in-sine"
        />
        <p
          id="footer-para"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-delay="1600"
          data-aos-offset="0"
        >
          Living, learning, & leveling up.
        </p>
        <a
          href="https://www.linkedin.com/in/netram-thakkar-395670213/"
          target={"_blank"}
        >
          <img
            src={linkedIn}
            alt="LinkedIn"
            id="LinkedIn"
            data-aos="zoom-out-up"
            data-aos-delay="1800"
            data-aos-easing="ease-in-sine"
          />
        </a>

        <a href="https://github.com/DevilexeOP" target={"_blank"}>
          <img
            src={github}
            alt="Github"
            id="github"
            data-aos="zoom-out-up"
            data-aos-delay="2000"
            data-aos-easing="ease-in-sine"
          />
        </a>
        <a href="https://twitter.com/D3VILexeOP" target={"_blank"}>
          <img
            src={twitter}
            alt="Twitter"
            id="twitter"
            data-aos="zoom-out-up"
            data-aos-delay="2200"
            data-aos-easing="ease-in-sine"
          />
        </a>
        <a href="https://www.instagram.com/d3vil.exe/" target={"_blank"}>
          <img
            src={instagram}
            alt="Instagram"
            id="instagram"
            data-aos="zoom-out-up"
            data-aos-delay="2400"
            data-aos-easing="ease-in-sine"
          />
        </a>
        <h6
          id="copyright"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-delay="2500"
          data-aos-offset="0"
        >
          CopyRight &#169; 2022 D3vilOPエース || All rights reserved
        </h6>
      </section>
    </React.Fragment>
  );
}
