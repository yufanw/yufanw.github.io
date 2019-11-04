import React from 'react';
import './index.css';

export default function Loader() {
  return (
    <div className="loader-comp">
      <div className="loader">      
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="wineglass left">
          <div className="top"></div>
        </div>
        <div className="wineglass right">
          <div className="top"></div>
        </div>
      </div>
    </div>
  );
};
