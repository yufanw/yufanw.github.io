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

  setArticle = () => {
    this.props.onClick(this.props.article);
  }

  render() {
    const {
      article,
    } = this.props;
    const {
      imageError,
    } = this.state;
    return (
      <div className={imageError || !article.urlToImage ? "hide" : "article-comp"}>
        <div className="hoverable" onClick={this.setArticle}>
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
        </div>
      </div>
    );
  }
}

