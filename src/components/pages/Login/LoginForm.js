import React from 'react';

class LoginForm extends React.Component{
  constructor(props){
    super(props);

    this.login = React.createRef();
    this.password = React.createRef();
    
    this.submit = (ev) => {
      ev.preventDefault();
      const {onSubmit} = this.props;
      onSubmit(this.login.current.value, this.password.current.value);
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
              <td><input ref={this.login} type="username"/></td>
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

export default LoginForm;