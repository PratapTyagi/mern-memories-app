import { useState, useEffect } from "react";

// imports from outside
import { Container, AppBar, Typography, Grid, Grow } from "@material-ui/core";
import { useDispatch } from "react-redux";

// imports from our app
import Form from "./Forms/Form";
import Posts from "./Posts/Posts";
import { getPosts } from "./actions/posts";

import useStyle from "./styles";
import LOGO from "./ascets/memories.png";

function App() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const [currentId, setcurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

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
            className={classes.mainContainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={8}>
              <Posts setcurrentId={setcurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setcurrentId={setcurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
