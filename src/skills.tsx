import CodeIcon from "@mui/icons-material/Code";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServicesTwoTone";
import StorageIcon from "@mui/icons-material/StorageTwoTone";
import {
  Container,
  Grid,
  Icon,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

function Skills() {
  return (
    <>
      <div id="skills" style={{ border: "1px solid white" }}></div>
      <Container>
        <Typography marginTop={15}>
          <Typography variant="h3" align="center" gutterBottom>
            Skills Overview
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            marginLeft={10}
            marginTop={5}
            marginRight={10}
          >
            May main focus is on Frontend, UX and UI development. But I also
            know Backend development. Here is the complete details of my
            expertise.
          </Typography>
          <Typography
            variant="subtitle2"
            align="center"
            gutterBottom
            marginTop={2}
          >
            <Link href="/resume.png">
              <b>Check out my online resume</b>
            </Link>
          </Typography>
        </Typography>
      </Container>

      {/* <Container>
        <Grid container spacing="20" marginTop={5} marginBottom={15}>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              variant="elevation"
              elevation={3}
              sx={{
                padding: 3,
                borderWidth: 3,
                borderColor: "black",                
              }}
            >
              <Icon>
                <CodeIcon />
              </Icon>

              <Typography variant="h5" marginBottom={2} marginTop={2} align="center">
                Frontend
              </Typography>
              <Typography align="center">
                <Stack direction="column">
                  html, css, javaScript, Node.js, React,js, Next.js, TypeScript
                </Stack>
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6} lg={4} align="center">
            <Paper
              variant="elevation"
              elevation={3}
              sx={{
                padding: 3,
                borderWidth: 3,
              }}
            >
              <Icon>
                <StorageIcon />
              </Icon>

              <Typography variant="h5" marginBottom={2} marginTop={2}>
                Backend
              </Typography>
              <Typography align="center">
                <Stack direction="column">
                  REST API, Context API, Redux, Mongoose, Express, MongoDB
                </Stack>
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6} lg={4} align="center">
            <Paper
              variant="elevation"
              elevation={3}
              sx={{
                padding: 3,
                borderWidth: 3,
              }}
            >
              <Icon>
                <MiscellaneousServicesIcon />
              </Icon>

              <Typography variant="h5" marginBottom={2} marginTop={2}>
                Miscellaneous
              </Typography>
              <Typography align="center">
                <Stack direction="column">
                  Photoshop, Illustration, 2D Animation, Video Editing, Social
                  Media Marketing
                </Stack>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container> */}
    </>
  );
}

export default Skills;
