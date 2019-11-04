import React, { useState } from 'react';

import ImageBox from '../../ImageBox';
import News from '../../News';

import './index.css';

export default function NewsPage() {
  const [articles, setArticles] = useState([]);

  return (
      <div className="news-page-comp">
        <div className="content-wrapper">
          <div className="articles">
            <News 
              cachedArticles={articles}
              onLoadArticles={setArticles} />
          </div>
          <div className="sidebar">
            <div className="sticky-wrapper">
              <ImageBox />
            </div>
          </div>
        </div> 
      </div>
    );
}
