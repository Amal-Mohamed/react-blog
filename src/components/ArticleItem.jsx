import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class ArticleItem extends Component {
  render() {
    return (
      <Card className={this.props.className}>
        <Card.Img variant="top" src={this.props.article.url} />
        <Card.Body>
          {this.props.smallCard}
          <Card.Title>{this.props.article.title}</Card.Title>
          {this.props.smallCard ? (
            ""
          ) : (
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    );
  }
}

export default ArticleItem;
