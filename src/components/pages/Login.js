import React from 'react';
import LoginForm from './Login/LoginForm';
import propTypes  from 'prop-types'


const Login = ({onSubmit, errorLogin})=>{
  const error = errorLogin?<p>Wrong login or password</p>:null;
  return (
    <React.Fragment>
      <h1>Login Page</h1>
      <LoginForm onSubmit={onSubmit}/>
      {error}
    </React.Fragment>
  );
}

Login.propTypes = {
  onSubmit: propTypes.func.isRequired
}

export default Login;