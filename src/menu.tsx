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
  const handleClick = () => {
    window.scroll({top: 0, left: 0});
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }} id="about">
        <AppBar position="fixed" style={{ backgroundColor: "white", color: "black"}}>
          <Toolbar>

            <Avatar
              src="/myavatar.png"
              style={{ marginRight: "7px" }}
              component="a"              
              onClick={handleClick}
            />
            <Typography
              variant="body2"
              sx={{ flexGrow: 1, textTransform: "uppercase" }}
              component="a"             
              onClick={handleClick}
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
