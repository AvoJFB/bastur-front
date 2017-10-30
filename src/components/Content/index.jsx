import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BasturTableContainer from '../../containers/BasturTableContainer';
import NewOrder from '../NewOrder';

const Content = () => (
  <Switch>
    <Route exact path="/" component={BasturTableContainer} />
    <Route path="/new" component={NewOrder} />
  </Switch>
);

export default Content;
