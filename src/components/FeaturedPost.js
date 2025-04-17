import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import React from "react";

const useStyles = makeStyles({
  title: {
    fontSize: 40,
    fontFamily: "inherit",
  },
  cover: {
    backgroundImage: `url(https://t4.ftcdn.net/jpg/05/45/42/81/360_F_545428173_uyYWJoR9n5uJFYIWfDa2C49AzIECcU20.jpg)`,
    backgroundPosition: "center",
    padding: "35px 25px",
  },
  btn: {},
});

const FeaturedPost = () => {
  const classes = useStyles();
  return (
    <Card className={classes.cover}>
      <CardContent className={classes.textContainer}>
        <Typography className={classes.title} gutterBottom>
          Longest featured blog post
        </Typography>
        <Typography variant="h5">
          Learn Material UI with Project in React JS in one video. We will build
          a Blog Website UI using Material UI. We will learn Material UI
          components such as button, grid, container, toolbar, drawer, badge,
          material icons and many more..
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.btn}>Read more.....</Button>
      </CardActions>
    </Card>
  );
};

export default FeaturedPost;
