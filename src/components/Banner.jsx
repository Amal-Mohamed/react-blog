import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Breadcrumbs, Typography } from "@material-ui/core";

class Banner extends Component {
  ifPath() {
    if (this.props.match.path === "/contact") {
      return "d";
    } else {
      return "r";
    }
  }

  render() {
    return (
      <div className="main-section banner">
        <Container>
          <div className="main-section_content">
            <h1>{this.props.title}</h1>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              <Link to="/">Home</Link>
              <Link color="inherit" to="/articles">
                Articles
              </Link>
              <Typography>Breadcrumb</Typography>
            </Breadcrumbs>
          </div>
        </Container>
      </div>
    );
  }
}

export default Banner;
