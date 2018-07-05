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
          <fieldset>
            <div>
              <label>Login:</label>
              <input ref={this.login} type="username"/>
            </div>
            <div>
              <label>Password:</label>
              <input ref={this.password} type="password"/>
            </div>
            <input type="submit"/>
          </fieldset>
        </form>
    );
  }
}

export default LoginForm;