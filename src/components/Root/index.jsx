import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../store';
import NavBar from '../NavBar';
import Content from '../Content';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <NavBar />
        <Content />
      </div>
    </BrowserRouter>
  </Provider>
);

export default Root;
