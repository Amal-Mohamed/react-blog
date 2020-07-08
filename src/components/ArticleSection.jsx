import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Typography, Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import AricleItem from "../components/ArticleItem";
class ArticleSection extends Component {
  state = { articles: [], page: 1 };
  componentDidMount() {
    this.getArticles();
  }
  getArticles = (e, value = 1) => {
    this.setState({ page: value });
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?_page=${value}&_limit=5`
      )
      .then((response) => {
        this.setState({ articles: response.data });
      });
  };

  render() {
    return (
      <div className="article-section">
        <Container>
          <Grid container spacing={3}>
            {this.state.articles.map((article) => (
              <Grid item xs={12} md={this.props.md}>
                <Link to={"/react-blog/article/" + article.id} key={article.id}>
                  <AricleItem
                    className={this.props.className}
                    article={article}
                    key={article.id}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
          <div className="pagination-center">
            <Pagination
              count={10}
              size="large"
              color="secondary"
              page={this.state.page}
              onChange={this.getArticles}
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default ArticleSection;
