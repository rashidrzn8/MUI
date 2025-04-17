import { Badge, Divider, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  tagline: {
    fontSize: 20, // fixed: use fontSize instead of "font"
    flexGrow: 1,
    fontFamily: "fantasy",
    justifyContent: "center",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6">
          Blogging website
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <Toolbar className={classes.tagline}>
        Express your emotions through Words
      </Toolbar>
    </>
  );
};

export default Header;
