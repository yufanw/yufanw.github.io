import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import NewsPage from './views/NewsPage/index';
import SearchPage from './views/SearchPage/index';

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL} history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/"
          component={NewsPage} />
         <Route exact path="/search"
          component={SearchPage} />
      </Switch>
    </Router>
  )
}

export default Routes;