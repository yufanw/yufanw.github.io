import React, { useState } from 'react';
import { toLower } from 'lodash';

import './index.css';

export default function SearchPage() {
  const [searchTerm, setTerm] = useState('');
  const [inputTerm, setInput] = useState('');

  const search = () => {
    setTerm(inputTerm);
  }
  const renderResults = () => {
    if (toLower(searchTerm.trim()) === 'beautiful') {
      return (
        <div className="results">
          <img alt="The most beautiful girl in the world"
            src="https://media.licdn.com/dms/image/C5603AQHvlOE4nArQlg/profile-displayphoto-shrink_800_800/0?e=1577923200&v=beta&t=3wMgfsRz0oZFnzrSD_Phry4lBQE25ciuNWGwmTcYRJk" />
        </div>
      )
    }
    if (toLower(searchTerm.trim()) === 'whistle') {
      return (
        <div className="results">
          <img alt="Do you know how to whistle?"
            src="https://imgix.bustle.com/uploads/image/2018/3/22/160d1f60-2f59-4e1c-94eb-80cad754d672-screen-shot-2018-03-22-at-70316-pm.png?w=960&h=540&fit=crop&crop=faces&auto=format&q=70" />
        </div>
      )
    }
    return (
      <div className="results">
        No results found
      </div>
    )
  }
  return (
    <div className="search-page-comp">
      <div className="search-controls">
        <input className="search-box" 
          value={inputTerm} 
          onChange={e => setInput(e.target.value)}
          onKeyUp={e => e.keyCode === 13 && search()}
          placeholder="Search..."/>
        <button className="search-button" 
          onClick={search}>Submit</button>
      </div>
      {searchTerm && renderResults()}
    </div>
  );
}