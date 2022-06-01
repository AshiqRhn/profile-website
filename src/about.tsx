import { CardMedia, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";

function About() {
  return ( 
  
    <> 
    <div style={{border: '1px solid white'}}>      
      
      </div>   
      <Container style={{marginTop: '20px'}} >
        <Grid container marginTop={15}>
          <Grid item xs={12} md={6} lg={5} marginLeft={10} marginRight={15}>
            <CardMedia
              style={{ 
                height: "100%", 
                width: "100%",                            
               }}
              component="img"
              height="600"
              image="/Programmer-bro.png"
              alt="person"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4} marginTop={5}>
            <Typography variant="h4" align="center"  marginBottom={3}>
              Hi!
            </Typography>
            <Typography variant="h6" align="center" marginBottom={3}>
              It's me...
            </Typography>
            <Typography variant="h2" align="center"  marginBottom={5} >
              Ashiq
            </Typography>
            <Typography align="center" variant="subtitle1">
              <b>I'm a freelance Frontend React.js Developer.</b> <br/>
              I have three years of experience on frontend web development and more than 7 years of experience on WordPress web development.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Divider color="#d1e0e0"></Divider>     
    </>
  );
}

export default About;
