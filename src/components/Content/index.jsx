import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BasturTableContainer from '../../containers/BasturTableContainer';

const Content = () => (
  <Switch>
    <Route exact path="/" component={BasturTableContainer} />
  </Switch>
);

export default Content;
