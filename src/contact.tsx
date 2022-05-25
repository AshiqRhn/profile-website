import { Button, CardMedia, Container, Grid, TextField, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import React from 'react';

const Contact = () => {
  const useStyles = makeStyles({
    Media: {
      height: "100%",
      width: "70%",
      alignItems: "center",
    },
  });
  const classes = useStyles()
  return (
    <>
    <Container id="contact" style={{border: '1px solid white'}}>
    <Typography variant="h3" align="center"  marginBottom={5} marginTop={15}>
          Contact Me
        </Typography> 

        <Grid container marginBottom={10}>
        <Grid item xs={12} md={6} lg={5} marginTop={5} marginBottom={5} >
            <CardMedia
              className={classes.Media}
              component="img"
              image="/contact.png"
            />
          </Grid> 
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            marginTop={5}
            marginBottom={5}
            alignItems="center"
          > 
          <div>
            <form action="https://formsubmit.co/ashiq.uxdev@gmail.com" method="POST">
            <TextField
                  label="Full Name"
                  type="text"
                  name="name"
                  margin="normal"
                  variant="outlined"                  
                  fullWidth
                  required
                />
                
            <TextField
                  label="Email Address"
                  type="email"
                  name="email"
                  margin="normal"
                  variant="outlined"                  
                  fullWidth
                  required
                />
            <TextField
                multiline
                rows="4"
                label="Message"
                type="text"
                name="message"
                margin="normal"
                variant="outlined"               
                fullWidth                
              />
              <input
                type='hidden'
                name="_next"
                value="https://www.ashiqrahman.link/thankyou"
                
              />
              <input type='hidden' name="_captcha" value="false" />

              <Button fullWidth
                variant="contained"
                type="submit"
                sx={{
                  color: 'black',
                  backgroundColor: 'white',
                  boxShadow: '2px 4px #c2d6d6',
                }}>
                Submit
              </Button>
            </form>
          </div>

          </Grid>
      </Grid>
    </Container>
    </>
  )
}

export default Contact