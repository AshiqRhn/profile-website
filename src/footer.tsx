import { Box, Icon, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "@mui/icons-material";

function Footer() {  


  return (
    <>
          
        <Box sx={{display: 'flex', justifyContent: 'space-evenly', padding: '20px', borderTop: 1, borderColor: "#75a3a3"}}>
          <Box padding="10px">
          <Typography>
            Md Ashiqur Rahman
            </Typography>
            <Typography>
            Kitchener, Ontario
            </Typography>
          </Box>
          <Box padding="10px">
            
            
            <Icon sx={{marginRight:"20px"}}>
              <a href="https://github.com/AshiqRhn?tab=repositories" target="_blank">
               <GitHubIcon />
              </a>
            </Icon>             
         
          
            <Icon>
              <a href="https://www.linkedin.com/in/ashiq001/" target="_blank">
              <LinkedInIcon  />
              </a>
            </Icon>            
          </Box>
          <Box padding="10px">
            <Typography>              
              E-mail: ashiq.uxdev@gmail.com
              </Typography>
            <Typography>
              Phone: +1 519 588 7296
            </Typography>
          </Box>

        </Box>
          <Typography variant="body2" color="black" padding="5px" align="center"
          
          >
             &copy; <i>2022 Md Ashiqur Rahman</i>
          </Typography>
     
    </>
  );
}

export default Footer;
