import React from 'react'
import {Switch, Redirect} from 'react-router-dom'
import propTypes from 'prop-types';

const PrivateSwitch = (props)=>{
  const {location, access, children, redirect} = props;

  return (
  <Switch>
  
   {access?children:(<Redirect to={{
        pathname:redirect,
        state: { from: location.pathname }
      }}/>)}

  </Switch>
  )
}

PrivateSwitch.propTypes = {
  children: propTypes.element.isRequired
}
export default PrivateSwitch;