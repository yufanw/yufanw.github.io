import React from 'react'
import './index.css';

export default function ImageBox() {
  return (
    <div className="image-box">
      <h4>Image of the day</h4>
      <img src="https://source.unsplash.com/400x400/daily" 
        className="responsive-image floating"
        alt="Daily unsplash"/>
      <div className="caption"><a href="https://source.unsplash.com/">Updated daily by <span className="link">unsplash</span></a></div>
    </div>
  )
}

