import React, { Component } from "react";
import axios from "axios";
import Banner from "../components/Banner";
import AricleItem from "../components/ArticleItem";
import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArticleSection from "../components/ArticleSection";

class Articles extends Component {
  render() {
    return (
      <div className="all-articles">
        <Banner title="Articles" />
        <ArticleSection md="4" className="article-item-single" />
      </div>
    );
  }
}

export default Articles;
