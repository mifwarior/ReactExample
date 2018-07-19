import React from 'react';
import propTypes from 'prop-types';

class LoginForm extends React.Component{
  constructor(props){
    super(props);

    this.login = React.createRef();
    this.password = React.createRef();
 

    this.submit = (ev) => {
      ev.preventDefault();
      const {onSubmit} = this.props;
      const login = this.login.current.value;
      const password = this.password.current.value;
      
      this.password.current.value = null;

      onSubmit(login, password);

    };
    
  }
  
  render(){

    const {submit} = this;
    return (
        <form action="#" onSubmit={submit}>
          <table>
            <tbody>
            <tr>
              <td><label>Login:</label></td>
              <td><input ref={this.login} type="username" /></td>
            </tr>
            <tr>
              <td><label>Password:</label></td>
              <td><input ref={this.password} type="password"/></td>
            </tr>
            </tbody>
          </table>
          
          <input type="submit"/>
        </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
  error: propTypes.bool
}

export default LoginForm;