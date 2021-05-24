import { useState, useEffect } from "react";

import Form from "../Forms/Form";
import Posts from "../Posts/Posts";

import { Container, AppBar, Typography, Grid, Grow } from "@material-ui/core";
import { getPosts } from "../actions/posts";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setcurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
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
  );
};

export default Home;
