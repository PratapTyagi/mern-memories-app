import LOGO from "./ascets/memories.png";

import { Container, AppBar, Typography, Grid, Grow } from "@material-ui/core";
import Form from "./Forms/Form";
import Post from "./Posts/Posts";

import useStyle from "./styles";

function App() {
  const classes = useStyle();
  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} varient="h2" align="center">
          MERN-Memories-App
        </Typography>
        <img className={classes.image} src={LOGO} alt="LOGO" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={8}>
              <Post />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
