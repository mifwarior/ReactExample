import React from 'react'
import {Switch, Redirect} from 'react-router-dom'

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
export default PrivateSwitch;