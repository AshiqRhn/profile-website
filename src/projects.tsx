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
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
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
                    Expense Calculator App
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
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
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
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
