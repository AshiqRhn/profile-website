import CodeIcon from "@mui/icons-material/Code";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import StorageIcon from "@mui/icons-material/Storage";
import {
  Avatar,
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
    <div id="skills"></div>
      <Container>
        <Typography marginTop={15}>
          <Typography variant="h3" align="center" gutterBottom>
            Skills Overview
          </Typography>
          <Typography
            variant="subtitle2"
            align="center"
            marginLeft={10}
            marginTop={5}
            marginRight={10}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
            mollitia a distinctio laudantium, magnam deserunt porro fugit
            veritatis ducimus repellendus debitis accusamus, provident minus
            delectus corporis commodi? Ut quas sint rem temporibus, odit magnam
            praesentium! Ipsa, quibusdam reiciendis!
          </Typography>
          <Typography
            variant="subtitle2"
            align="center"
            gutterBottom
            marginTop={2}
          >
            <Link href="/resume.png">Check out my online resume</Link>
          </Typography>
        </Typography>
      </Container>

      <Container>
        <Grid container spacing="20" marginTop={5} marginBottom={15}>
          <Grid item xs={12} md={6} lg={4} align="center">
            <Paper
              variant="outlined"
              sx={{
                padding: 3,
                borderWidth: 3,
              }}
            >
              <Avatar variant="rounded">
                <Icon>
                  <CodeIcon />
                </Icon>
              </Avatar>

              <Typography variant="h5" marginBottom={2} marginTop={3}>
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
              variant="outlined"
              sx={{
                padding: 3,
                borderWidth: 3,
              }}
            >
              <Avatar variant="rounded">
                <Icon>
                  <StorageIcon />
                </Icon>
              </Avatar>

              <Typography variant="h5" marginBottom={2} marginTop={3}>
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
              variant="outlined"
              sx={{
                padding: 3,
                borderWidth: 3,
              }}
            >
              <Avatar variant="rounded">
                <Icon>
                  <MiscellaneousServicesIcon />
                </Icon>
              </Avatar>

              <Typography variant="h5" marginBottom={2} marginTop={3}>
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
      </Container>
    </>
  );
}

export default Skills;
