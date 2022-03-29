import {
  Button,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Footer from "./footer";

function Contact() {
  const useStyles = makeStyles({
    Media: {
      height: "100%",
      width: "70%",
      alignItems: "center",
    },
  });

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = () => {};

  const classes = useStyles()

  return (
    <>
      <Container id="contact" style={{border: '1px solid black'}}>
        <Typography variant="h3" gutterBottom align="center" marginTop={12}>
          Contact Me
        </Typography>
        <Typography variant="body1" marginBottom={5} align="center">
          Drop us a line
        </Typography>

        <Grid container>
          <Grid item xs={12} md={6} lg={5} marginTop={5} marginBottom={5} marginRight={1}>
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
            <form noValidate autoComplete="off">
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
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
