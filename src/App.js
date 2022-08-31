import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

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
    </React.Fragment>
  );
}
