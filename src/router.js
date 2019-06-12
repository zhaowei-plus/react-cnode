import React from 'react';
import { Router, Route, Switch } from 'dva/router';

// import Home from './components/Home';
// import Topic from './components/Topic';
import ZwLayout from './containers/ZwLayout';

const RouterConfig = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={ZwLayout} />
        {/*<Route path="/home" exact component={Home} />*/}
        {/*<Route path="/topic" exact component={Topic} />*/}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
