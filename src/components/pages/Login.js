import React from 'react';
import PageTemplate from '../PageTemplate';
import LoginForm from './Login/LoginForm';
import propTypes  from 'prop-types'


const Login = ({onSubmit, errorLogin})=>{
  const error = errorLogin?<p>Wrong login or password</p>:null;
  return (
    <PageTemplate>
      <span>Login Page</span>
      <LoginForm onSubmit={onSubmit}/>
      {error}
    </PageTemplate>
  );
}

Login.propTypes = {
  onSubmit: propTypes.func.isRequired
}

export default Login;