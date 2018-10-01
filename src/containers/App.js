import React, { Component } from 'react';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'

import AuthRoute from './../components/AuthRoute'
import PrivateSwitch from '../components/PrivateSwitch'

import Main from "./../components/pages/Main";
import News from "./News";
import Profile from "./Profile";
import PageTemplate from "./PageTemplate";
import Login from './Login';

import {connect} from 'react-redux';
import { logoutAction } from '../actions';



const mapStateToProps = (state, ownProps)=>{
  return state.Login;
}

class App extends Component {

  createPage(Component){
    return ()=>{ return (<PageTemplate><Component/></PageTemplate>)}
  }
  render() {
    const {loggined, dispatch} = this.props;
    
    return (
      <div>
        <HashRouter>
          <Switch>
            
            <Route exact path="/" component={this.createPage(Main)} />
            <Route path="/news" component={this.createPage(News)}/>

            <AuthRoute loginned={loggined} path="/login" component={this.createPage(Login)}/>

            <PrivateSwitch access={loggined} redirect="/login">
              <Route  path="/profile" component={this.createPage(Profile)}/>
            </PrivateSwitch>

          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(App);
