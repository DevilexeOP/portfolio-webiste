import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../navimg.png";

import "../Styles/navbar.css";

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header data-aos="fade-down" data-aos-delay="500" data-aos-easing="ease-in-sine">
      <img src={Logo} alt="logo" id="logo" />

      <nav ref={navRef}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/my-skills">My Skills</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
        <button className="nav-btn nav-close-btn">
          <FaTimes onClick={showNavbar} />
        </button>
      </nav>
      <button className="nav-btn nav-close-btn">
        <FaBars onClick={showNavbar} />
      </button>
    </header>
  );
}
