import React, { Component } from 'react';
import { NEWS_API_KEY } from '../api/api.js';
import axios from 'axios';
import {
  get,
  size,
  map,
} from 'lodash';
import Article from './Article.jsx';

import './index.css';
import Loader from '../Loader/index.jsx';

export class News extends Component {

  state = {
    articles: null,
    error: null,
    isLoading: true,
  }

  componentDidMount() {
    this.getTopHeadlines();
  }

  getTopHeadlines = () => {
    const url = 
    'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    `apiKey=${NEWS_API_KEY}`;

    axios.get(url)
    .then(res => {
      this.setState({
        articles: get(res, 'data.articles'),
        isLoading: false,
      });
    })
    .catch(error => {
      this.setState({
        error,
        isLoading: false,
      });
    })
  }

  loadArticles = () => {
    if(this.state.isLoading) {
      return (
        <Loader />
      );
    }
    return this.renderArticles();
  }

  renderArticles = () => {
    if(size(this.state.articles)) {
      return map(this.state.articles, (article, index) => {
        return (
          <Article article={article} key={article.publishedAt + index}/>
        )
      })
    }
    return (
      <div>
        No news found
      </div>
    )
  }

  render() {
    const {
      error,
    } = this.state;
    return (
      <div className="news-comp">
        <h4>Recent Headlines</h4>
        {
          !error && this.loadArticles()
        }
      </div>
    );
  }
}

export default News;
