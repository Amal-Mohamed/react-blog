import React, { Component } from "react";
import { Container } from "@material-ui/core";

class MainSection extends Component {
  render() {
    return (
      <div className="main-section">
        <Container>
          <div className="main-section_content">
            <p>Welcome to</p>
            <h1>Readit blog</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
        </Container>
      </div>
    );
  }
}

export default MainSection;
