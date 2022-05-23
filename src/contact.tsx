import {
  Button,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

function Contact() {
  const useStyles = makeStyles({
    Media: {
      height: "100%",
      width: "70%",
      alignItems: "center",
    },
  });
useState
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {};

  const classes = useStyles()

  return (
    <>
      <Container id="contact" style={{border: '1px solid white'}}>
        <Typography variant="h3" align="center"  marginBottom={5} marginTop={15}>
          Contact Me
        </Typography>        

        <Grid container marginBottom={10}>
          <Grid item xs={12} md={6} lg={5} marginTop={5} marginBottom={5} marginRight={5}>
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
            <form noValidate autoComplete="off" action="https://formsubmit.co/ashiq.uxdev@email.com" method="POST">
              <div>
                <TextField
                  label="Full Name"
                  margin="normal"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                />
                <TextField
                  label="Email Address"
                  margin="normal"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                />
              </div>
              <br />

              <TextField
                multiline
                rows="4"
                label="Message"
                margin="normal"
                variant="outlined"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                fullWidth
              />
              <br />
              <input type="hidden" name="_next" value="https://www.ashiqrahman.link/thankyou.tsx"></input>
              <Button
                fullWidth
                variant="contained"                
                onClick={handleSubmit}
              
              sx={{
                color: 'black',
                backgroundColor: 'white',
                boxShadow: '2px 4px #c2d6d6',
              }}
              >
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>     
    </>
  );
}

export default Contact;
