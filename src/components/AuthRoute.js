import React from 'react'
import {Redirect, Route} from 'react-router-dom'

class AuthRoute extends React.Component{

  componentDidUpdate(prevProps) {
  
    console.log(prevProps);
  }
  render(){
    const {loginned, location, ...rest} = this.props;
    let url = "/";

    if(loginned && location.pathname !== url){

      return <Redirect to={{
        pathname:url,
        state: { from: location }
      }}/>
    }
    return (
      <Route {...rest}/>
    )
  }
  
}

export default AuthRoute;