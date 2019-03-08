import React, { Component } from 'react';
import moment from 'moment';
import {
  get,
} from 'lodash';
import './App.css';
import Header from './Header';
import ImageBox from './ImageBox';
import SocialMediaBox from './SocialMediaBox';
import News from './News';
import Modal from './Modal';
class App extends Component {
  state = {
    darkMode: false,
    isModalOpen: false,
    article: {},
    articles: [],
    scroll: {
      x: 0,
      y: 0,
    },
  }
  toggleDarkMode = () => {
    this.setState({
      darkMode: !this.state.darkMode,
    });
  }
  setModal = (isModalOpen) => {
    this.setState({
      isModalOpen,
    })
  }
  openModal = () => {
    this.setModal(true);
  }
  closeModal = () => {
    this.setState({
      article: {},
    });
    this.setModal(false);
    setTimeout(() => {
      window.scrollTo(this.state.scroll.x, this.state.scroll.y)
    }, 0)
  }
  setCurrentArticle = (article) => {
    this.getScrollPosition();
    window.scrollTo(0, 0)
    this.setState({
      isModalOpen: true,
      article,
    })
  }
  getScrollPosition = () => {
    var doc = document.documentElement;
    var x = get(window, 'pageXOffset', doc.scrollLeft) - get(doc, 'clientLeft', 0);
    var y = get(window, 'pageYOffset', doc.scrollTop)  - get(doc, 'clientTop', 0);
    console.log(x, y);
    this.setState({
      scroll: {
        x,
        y,
      }
    })
  }
  setContent = () => {
    if(this.state.article.content) {
      return this.state.article.content.split('[+')[0];
    }
  }
  cacheArticles = (articles) => {
    this.setState({
      articles,
    })
  }
  render() {
    const { 
      darkMode,
      isModalOpen,
      article,
      articles,
     } = this.state;
    return (
      <div className={darkMode ? 'app dark' : 'app'}>
        <div className={isModalOpen ? "app-wrapper full-height" : "app-wrapper"}>
          <div className="title">{get(article, 'source.name', 'Daily News')}</div>
          <div className="app-header">
            <Header on={this.state.darkMode} onToggle={this.toggleDarkMode} />
          </div>
          <div className="app-body">
            <div className={isModalOpen ? "modal-wrapper" : "minimize"}>
              <Modal
                onClose={this.closeModal}
                content={() => 
                  <div>
                    <h1>{article.title}</h1>
                    <img src={article.urlToImage}
                      className="responsive-image"
                      alt={article.description}></img>
                    <div className="article-container"> 
                      <div className="article-description"><div dangerouslySetInnerHTML={{__html: article.description}} /></div>
                      <div className="article-author">{article.author}</div>
                      <div className="article-date">{moment(article.publishedAt).format('llll')}</div>
                      <div className="article-content"><div dangerouslySetInnerHTML={{__html: this.setContent()}} /></div>
                      <div className="article-source"><a href={article.url}><span className="link">Read more...</span></a></div>
                    </div>
                  </div>
                }
              />
            </div>                         
            {!isModalOpen &&
              <div className="content-wrapper">
                <div className="articles">
                  <News 
                    cachedArticles={articles}
                    onLoadArticles={this.cacheArticles}
                    onClickArticle={this.setCurrentArticle}
                  />
                </div>
                <div className="sidebar">
                  <ImageBox />
                  <SocialMediaBox />
                </div>
              </div>
            }         
          </div>
        </div>
        <div className="app-footer"> 
          Copyright 2019 Yufan Wang
          <div className="note">
            <a href="https://newsapi.org//">
              Powered by <span className="link">News API</span>
            </a>
          </div>
          <div className="note">
            <a href="https://www.nytimes.com/">
              Design inspired by <span className="link">The New York Times</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
