import React from 'react';

const Main = (props)=>{
  console.log(props);
  return (
    <React.Fragment>
      <div><h1>Main Page</h1></div>
      <div>
        <span>
          This is example page of single page application<br/>
          Using:
          <ul>
            <li>isomorphic-fetch</li>
            <li>prop-types</li>
            <li>react</li>
            <li>react-dom</li>
            <li>react-redux</li>
            <li>react-router</li>
            <li>react-router-dom</li>
            <li>react-scripts</li>
            <li>redux</li>
            <li>redux-thunk</li>
          </ul>
          CSS: flexbox layout
          
        </span>
      </div>
    </React.Fragment>
  );
}

export default Main;