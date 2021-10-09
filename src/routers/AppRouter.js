import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import { DasboardRouter } from './DasboardRouter';

export const AppRouter = () => {

    return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth/" component={ AuthRouter }/>

          <Route path="/" component={ DasboardRouter }/>

          <Redirect to="/auth"/>
        </Switch>
      </div>
    </Router>
    );
}
