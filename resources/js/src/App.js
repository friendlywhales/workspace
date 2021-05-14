import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import SurveyComponent from './components/Survey'

 const App = () => {
    return (
      <Router className ="App_container">
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/add">
                <Add />
              </Route>
              <Route exact path="/edit/:id">
                <Edit />
              </Route>
          </Switch>
      </Router>  
    );
 };

ReactDOM.render(<App/>, document.getElementById('app'));