import React from 'react';
import propTypes from 'prop-types';

const News = ({news})=>{
  const newsElements = news.map((val,index)=>{
    const {id,title,text} = val
    return (
      <div key={id}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    )
  })
  return (
    <React.Fragment>
      <h1>News Page</h1>
      {newsElements}
    </React.Fragment>
  );
}

News.propTypes = {
  news: propTypes.array.isRequired
}

export default News;