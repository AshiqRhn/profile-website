import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

function Projects() {
  return (
    <>
    <div  id="projects" style={{border: '1px solid white'}}></div>
      <Container >
        <Typography variant="h3" align="center" marginBottom={7} marginTop={15}>
          My Projects
        </Typography>
        <Grid container marginBottom={12}>
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 345 }} elevation={3}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/counter.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Counter App
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A simple Game Counter App for two teams with the changeable display. 
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href="/proj1">
                  Try it
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 345 }} elevation={3}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/expense.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    My Tasks App
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Displays the CRUD operation of my daily task with add, edit and delete functionality. 
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Try it
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 345 }} elevation={3}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/api.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Rest API App
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A REST API project using JSONPlaceholder to display data in an array. 
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Try it
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Projects;
