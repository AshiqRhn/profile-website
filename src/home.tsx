import Head from "next/head";
import React from "react";
import Menu from "../src/menu";
import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
import Projects from "./projects";
import Skills from "./skills";

function HomePage() {
  return (
    <>
    <Head>
      <title>My Profile</title>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet"/>      
    </Head>
      <Menu />
      <About />
      <Skills />     
      <Projects />
      <Contact />
      <Footer />      
    </>
  );
}

export default HomePage;
