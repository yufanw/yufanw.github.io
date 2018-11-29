import React from 'react'
import './index.css';

export default function SocialMediaBox() {
  return (
    <div className="social-media-box">
      <div className="box">
        <h4 className="contact-title">Contact me:</h4>
        <div><a href="https://www.linkedin.com/in/yufan-wang-web"><span className="link">LinkedIn</span></a></div>
        <div><a href="https://github.com/yufanw"><span className="link">Github</span></a></div>
        <h5 className="links-title">External Resources:</h5>
        <div><a href="https://www.javascript.com/try"><span className="link">Javascript</span></a></div>
        <div><a href="https://reactjs.org/tutorial/tutorial.html"><span className="link">React</span></a></div>
      </div>
    </div>
  )
}
