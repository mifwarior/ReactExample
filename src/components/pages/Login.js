import React from 'react';
import LoginForm from './Login/LoginForm';
import propTypes  from 'prop-types'


const Login = ({onSubmit, errorLogin})=>{
  const error = errorLogin?<p>Wrong login or password</p>:null;
  return (
    <React.Fragment>
      <h1>Please sign in</h1>
      <LoginForm onSubmit={onSubmit}/>
      {error}
      <div className="login-hint">
        <span>try:</span>
        <span>max@test.com</span>
        <span>12345</span>
      </div>
    </React.Fragment>
  );
}

Login.propTypes = {
  onSubmit: propTypes.func.isRequired
}

export default Login;