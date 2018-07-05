import React from 'react';
import NavBar from './NavBar';

const PageTemplate = ({children})=>{
  return (
    <div className="page">
      <NavBar/>
      {children}
    </div>
  );
}

export default PageTemplate;