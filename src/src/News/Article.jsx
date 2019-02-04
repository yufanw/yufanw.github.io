import React, { Component } from 'react';
import {get} from 'lodash';
import './Article.css';

export default class Article extends Component {

  state = {
    imageError: false,
  }

  handleImageError = () => {
    this.setState({
      imageError: true,
    });
  }

  render() {
    const {
      article,
    } = this.props;
    const {
      imageError,
    } = this.state;
    return (
      <div className="article-comp">
        <a href={article.url}>
          {!imageError && 
            <img src={article.urlToImage}
              onError={this.handleImageError}
              className="responsive-image"
              alt={article.description}></img>
          }
          <div
            className="article-title">
            {article.title}</div>
          <div
            className="article-source"
          >Source: {article.author} | {get(article, 'source.name')}</div>
        </a>
      </div>
    );
  }
}

