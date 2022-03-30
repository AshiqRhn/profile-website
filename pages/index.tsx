import type { NextPage } from "next";
import Head from "next/head";

import HomePage from "../src/home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Profile</title>
        
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap"
         
        />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
