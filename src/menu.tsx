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
      <Box sx={{ flexGrow: 1 }} id="about">
        <AppBar position="fixed" style={{ backgroundColor: "white", color: "black"}}>
          <Toolbar>
            <Avatar
              src="/ashiq.png"
              style={{ marginRight: "7px" }}
              component="a"
              href="#box"
            />
            <Typography
              variant="body2"
              sx={{ flexGrow: 1, textTransform: "uppercase" }}
              component="a"
              href="#box"
            >
              Ashiq
            </Typography>

            <Button color="inherit" size="small" component="a" href="/#about">
              <Typography variant="body2">
                About
              </Typography> 
            </Button>
            <Button color="inherit" size="small" component="a" href="/#skills">
            <Typography variant="body2">
                Skills
              </Typography>
            </Button>
            <Button color="inherit" size="small" component="a" href="#projects">
            <Typography variant="body2">
                Projects
            </Typography>
            </Button>
            <Button color="inherit" size="small" component="a" href="#contact">
            <Typography variant="body2">
                Contact
            </Typography>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Menu;
