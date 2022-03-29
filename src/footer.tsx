import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

function Footer() {
  const useStyles = makeStyles({
    footer: {
      backgroundColor: "purple",
      width: "100%",
    },
  });

  const classes = useStyles();
  return (
    <>
      <footer className={classes.footer}>
        <Container maxWidth="lg" fixed>
          <Typography variant="h6" color="white" padding="40px" align="center">
            Kitchener, Ontario &copy; 2021 Md Ashiqur Rahman
          </Typography>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
