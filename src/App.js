import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import MySkills from "./Components/MySkills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home
        head="<Frontend"
        header="Developer/>"
        con="< Hey .I'm Netram .  "
        content="A FrontEnd Developer /> "
        para="< I'm also a Graphic Designer,"
        paragraph=" Video Editor  
        & UI/UX Designer /> "
      />
      <About
        title="<About/>"
        para1="< Hey Fellas ! I’m Netram. Nice to meet you </>  "
        para2="< I have  been freelancing as a Graphic Designer"
        para02=" and Video Editor over a year and I have started Frontend "
        para03="Developement few months ago .
        </>  "
        para3="<I know languages such as C++,Java,python and I'm currently doing DSA</>  "
        para4="< I am kinda familiar with React.js and I like to work on reactbased 
        projects</>  "
      />
      <MySkills myskill="<My Skills />" />
      <Projects myProject="<Projects />" />
      <Contact
        contact="< Contact />"
        p10="< I’m interested in freelance opportunities – especially ambitious or large projects. "
        p11="However, if you have other request or question, don’t hesitate to use the form./>"
      />
      <Footer name="< Footer/>" />
    </React.Fragment>
  );
}
