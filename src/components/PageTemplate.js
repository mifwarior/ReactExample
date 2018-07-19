import React from 'react';
import NavBar from './NavBar';
import propTypes from 'prop-types'

const PageTemplate = ({children})=>{
  return (
    <div className="page">
      <NavBar/>
      {children}
    </div>
  );
}

PageTemplate.propTypes = {
  children: propTypes.element.isRequired
}

export default PageTemplate;