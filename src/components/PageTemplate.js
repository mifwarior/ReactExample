import React, {Fragment} from 'react';
import NavBar from './NavBar';
import propTypes from 'prop-types'


const PageTemplate = ({children, Login})=>{
  return (
    <Fragment>
      <NavBar loggined={Login.loggined}/>
      <div className="page">
        <div className="page-content">
          {children}
        </div>
      </div>
    </Fragment>
  );
}

PageTemplate.propTypes = {
  children: propTypes.element.isRequired
}

export default PageTemplate;