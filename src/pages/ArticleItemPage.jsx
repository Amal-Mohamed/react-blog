import React, { Component } from "react";
import axios from "axios";
import Banner from "../components/Banner";
import AricleItem from "../components/ArticleItem";
import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

class ArticleItemPage extends Component {
  state = { articles: [], article: {} };
  componentDidMount() {
    this.getArticleItem();
    this.getArticles();
  }
  getArticleItem = (e) => {
    // console.log(this.props.match.params.id);
    let id;
    if (e) {
      id = e;
    } else {
      id = this.props.match.params.id;
    }

    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((response) => {
        // this.setState({ article: response.data });
        this.setState((state) => ({
          ...state.article,
          article: response.data,
        }));
        // console.log(this.state.article);
      });
    // window.location.reload();
  };
  getArticles = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?_page=2&_limit=3`)
      .then((response) => {
        this.setState({ articles: response.data });
      });
  };
  render() {
    return (
      <div>
        <Banner title="Single Blog" />
        <div className="article-item-layout">
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <AricleItem
                  className="article-item"
                  article={this.state.article}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <h5>Recent Articles</h5>
                {this.state.articles.map((article) => (
                  <Link
                    to={"/react-blog/article/" + article.id}
                    key={article.id}
                    onClick={() => this.getArticleItem(article.id)}
                  >
                    <AricleItem
                      className="article-item-home-card small"
                      article={article}
                      key={article.id}
                      smallCard={true}
                    />
                  </Link>
                ))}
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    );
  }
}

export default ArticleItemPage;
