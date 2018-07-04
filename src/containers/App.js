import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from "./../components/pages/Login";
import Main from "./../components/pages/Main";
import News from "./../components/pages/News";
import Profile from "./../components/pages/Profile";

class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/login" component={Login}/>
            <Route path="/news" component={News}/>
            <Route path="/profile" component={Profile}/>
          </Switch>
        </BrowserRouter>
        There be a content 
      </div>
    );
  }
}

export default App;
