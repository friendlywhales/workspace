import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import Login from './components/Login';
import Signup from './components/Signup';
import SurveyCommon from './components/SurveyCommon';
import SurveyCommon2 from './components/SurveyCommon2';
import SurveyDepth01 from './components/SurveyDepth01';
import PostDetail from './components/PostDetail';
import AdminHome from './components/AdminHome';


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
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/surveyCommon">
                <SurveyCommon2 />
              </Route>
              <Route exact path="/surveyDepth01">
                <SurveyDepth01 />
              </Route>
              <Route exact path="/postDetail/:id">
                <PostDetail />
              </Route>

              <Route exact path="/admin">
                <AdminHome />
              </Route>
          </Switch>
      </Router>
    );
 };

ReactDOM.render(<App/>, document.getElementById('app'));