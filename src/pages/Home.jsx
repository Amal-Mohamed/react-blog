import React, { Component } from "react";
import MainSection from "../components/MainSection";
import ArticleSection from "../components/ArticleSection";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <MainSection />
        <ArticleSection md="12" className="article-item-home-card" />
      </React.Fragment>
    );
  }
}

export default Home;
