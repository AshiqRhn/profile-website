import { CardMedia, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Skills from "./skills";

function About() {
  return (
    <>
      <Container style={{border: `2px solid red`, marginTop: '100px'}} id="about">
        <Grid container marginTop={15}>
          <Grid item xs={12} md={6} lg={5} marginLeft={10} marginRight={15}>
            <CardMedia
              style={{ height: "100%", width: "100%" }}
              component="img"
              height="600"
              image="/man3.png"
              alt="person"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4} marginTop={10}>
            <Typography variant="h3" align="center">
              Hi!
            </Typography>
            <Typography variant="h6" align="center">
              It's me...
            </Typography>
            <Typography variant="h3" align="center">
              A Rahman
            </Typography>
            <Typography align="center" variant="subtitle2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              numquam accusamus excepturi omnis quaerat architecto, adipisci
              corporis soluta delectus fugit nesciunt sequi debitis laudantium
              aut cupiditate atque non provident. Officiis alias quos placeat
              hic veniam modi, impedit itaque facilis vero, sunt nostrum nihil
              quo molestiae sit error facere quasi eligendi corrupti harum
              expedita! Laborum officia corrupti corporis autem asperiores
              quaerat obcaecati quidem voluptatibus doloribus voluptate harum
              commodi perspiciatis sapiente minus quae minima, eaque atque,
              aliquam voluptates similique.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Divider color="black"></Divider>

      <Skills />
    </>
  );
}

export default About;
