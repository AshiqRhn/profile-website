import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Chip,
  Toolbar,
  Typography,
} from "@mui/material";

function Menu() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} id="box">
        <AppBar position="fixed" style={{ backgroundColor: "purple" }}>
          <Toolbar>
            <Avatar
              src="/ashiq.png"
              style={{ marginRight: "7px" }}
              component="a"
              href="#box"
            />
            <Typography
              variant="body1"
              sx={{ flexGrow: 1 }}
              component="a"
              href="#box"
            >
              Ashiq
            </Typography>

            <Button color="inherit" size="small" component="a" href="#about">
              About
            </Button>
            <Button color="inherit" size="small" component="a" href="#skills">
              Skills
            </Button>
            <Button color="inherit" size="small" component="a" href="#projects">
              Projects
            </Button>
            <Button color="inherit" size="small" component="a" href="#contact">
              Contact
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Menu;
