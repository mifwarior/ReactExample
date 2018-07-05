import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import Main from "./../components/pages/Main";
import News from "./../components/pages/News";
import Profile from "./../components/pages/Profile";
import Login from './Login';

import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps)=>{
  return state;
}

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const loggined = this.props.loggined;
    return (
      <div >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/login" component={Login}/>
            <Route path="/news" component={News}/>
            <Route path="/profile" render={()=>{
              return !loggined? (<Redirect to="/login"/>) : (<Profile/>)
            }}/>
          </Switch>
        </BrowserRouter>
        There be a content 
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(App);
