import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NewsPage from './views/NewsPage/index';
import SearchPage from './views/SearchPage/index';

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL + '/'}>
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