import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Head from "next/head";
import React from "react";
import Menu from "../src/menu";
import About from "./about";
import ContactForm from "./contact";
import Footer from "./footer";
import Projects from "./projects";
import Skills from "./skills";

function HomePage() {
    const theme = createTheme({
      typography: {
        fontFamily: [
          'Montserrat', 
          'sans-serif',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
    });
  return (
    <>
    <ThemeProvider theme={theme}>
      <Head>
        <title>My Profile</title>         
      </Head>
        <Menu />
        <About />
        <Skills />     
        <Projects />
        <ContactForm />
        <Footer />    
    </ThemeProvider>
    </>
  );
}

export default HomePage;
