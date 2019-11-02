import React, { useState } from 'react';

import './index.css';

export default function SearchPage() {
  const [searchTerm, setTerm] = useState('');
  const [inputTerm, setInput] = useState('');

  const search = () => {
    setTerm(inputTerm);
  }
  const renderResults = () => {
    if (searchTerm !== 'beautiful') {
      return (
        <div className="results">
          No results found
        </div>
      )
    }
    return (
      <div className="results">
        <img src="https://media.licdn.com/dms/image/C5603AQHvlOE4nArQlg/profile-displayphoto-shrink_800_800/0?e=1577923200&v=beta&t=3wMgfsRz0oZFnzrSD_Phry4lBQE25ciuNWGwmTcYRJk" />
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