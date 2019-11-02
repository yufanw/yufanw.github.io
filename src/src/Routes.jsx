import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NewsPage from './views/NewsPage/index';
import SearchPage from './views/SearchPage/index';

const Routes = () => {
  console.log('process.env.PUBLIC_URL', process.env.PUBLIC_URL, '/');
  return (
    <Router basename='/'>
      <Switch>
        <Route exact path="/"
          component={NewsPage} />
         <Route exact path="/search"
          component={SearchPage} />
        <Route component={NewsPage} />
      </Switch>
    </Router>
  )
}

export default Routes;