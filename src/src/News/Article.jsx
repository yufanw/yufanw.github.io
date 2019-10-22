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
  setContent = (article) => {
    if(article.content) {
      return article.content.split('[+')[0];
    }
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
        <a className="hoverable"
          href={article.url}>
          {!imageError && 
            <img src={article.urlToImage}
              onError={this.handleImageError}
              className="responsive-image"
              alt={article.description}></img>
          }
          <div className="article-info">
            <div className="article-title">{article.title}</div>
            <div className="article-source">{article.author} ({get(article, 'source.name')})</div>
          </div>
        </a>
        <div className="article-content"><div dangerouslySetInnerHTML={{__html: this.setContent(article)}} /></div>
      </div>
    );
  }
}

