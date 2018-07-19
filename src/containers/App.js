import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import AuthRoute from './../components/AuthRoute'
import PrivateSwitch from '../components/PrivateSwitch'

import Main from "./../components/pages/Main";
import News from "./News";
import Profile from "./Profile";
import PageTemplate from "./../components/PageTemplate";
import Login from './Login';

import {connect} from 'react-redux';



const mapStateToProps = (state, ownProps)=>{
  return state.Login;
}

class App extends Component {

  createPage(Component){
    return ()=>{ return (<PageTemplate><Component/></PageTemplate>)}
  }
  render() {
    const loggined = this.props.loggined;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            
            <Route exact path="/" component={this.createPage(Main)} />
            <Route path="/news" component={this.createPage(News)}/>

            <AuthRoute loginned={loggined} path="/login" component={this.createPage(Login)}/>

            <PrivateSwitch access={loggined} redirect="/login">
              <Route  path="/profile" component={this.createPage(Profile)}/>
            </PrivateSwitch>

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(App);
