import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import AuthRoute from './../components/AuthRoute'
import PrivateSwitch from '../components/PrivateSwitch'

import Main from "./../components/pages/Main";
import News from "./../components/pages/News";
import Profile from "./../components/pages/Profile";
import Login from './Login';

import {connect} from 'react-redux';



const mapStateToProps = (state, ownProps)=>{
  return state;
}

class App extends Component {

  render() {
    const loggined = this.props.loggined;
    return (
      <div >
        <BrowserRouter>
          <Switch>
            
            <Route exact path="/" component={Main}/>
            <Route path="/news" component={News}/>

            <AuthRoute loginned={loggined} path="/login" component={Login}/>

            <PrivateSwitch access={loggined} redirect="/login">
              <Route  path="/profile" component={Profile}/>
            </PrivateSwitch>

          </Switch>
        </BrowserRouter>
        There be a content 
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(App);
