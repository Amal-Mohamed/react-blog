import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuIcon,
  Button,
  useScrollTrigger,
  Slide,
} from "@material-ui/core";

import { Link } from "react-router-dom";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
export default function NavbarLayout(props) {
  return (
    <HideOnScroll {...props}>
      <AppBar className="navbar-app">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          {/* <Typography variant="h6">NewsPaper</Typography> */}
          <Link to="/react-blog" className="nav-link">
            Home
          </Link>
          <Link to="/react-blog/articles" className="nav-link">
            Articles
          </Link>
          <Link to="/react-blog/contact" className="nav-link">
            contact
          </Link>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
