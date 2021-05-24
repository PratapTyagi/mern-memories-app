import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";

import { Link } from "react-router-dom";

import useStyles from "./styles";
import LOGO from "../ascets/memories.png";

const Navbar = () => {
  const classes = useStyles();
  const user = null;
  return (
    <>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
          <Typography
            className={classes.heading}
            component={Link}
            to="/"
            varient="h2"
            align="center"
          >
            MERN-Memories-App
          </Typography>
          <img className={classes.image} src={LOGO} alt="LOGO" height="60" />
        </div>
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
              <Avatar
                className={classes.purple}
                alt={user.result.name}
                src={user.result.img}
              />
              <Typography className={classes.userName} varient="h6">
                {user.result.name}
              </Typography>
              <Button
                varient="contained"
                className={classes.input}
                color="secondary"
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <Button
              component={Link}
              to="/auth"
              varient="contained"
              color="primary"
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
