import React from "react";

function Topic() {
    return (
      <div className="topics">
        <h1 className="topics__title">Topics Recommended for You</h1>
        <div className="topics__container">
          <p>Website</p>
          <p>JavaScript</p>
          <p>CSS</p>
          <p>AWS</p>
          <p>MongoDB</p> {/* Corrected typo from "Mango DB" */}
          <p>Azure</p>
          <p>Docker</p>
          <p>GitHub</p>
          <p>React JS</p>
        </div>
      </div>
    );
  }
  
  export default Topic;
  