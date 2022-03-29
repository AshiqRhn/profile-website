import React from "react";
import Menu from "../src/menu";
import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
import Projects from "./projects";

function HomePage() {
  return (
    <>
      <Menu />
      <About />     
      <Projects />
      <Contact />
      
    </>
  );
}

export default HomePage;
