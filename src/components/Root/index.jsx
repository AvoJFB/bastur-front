import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../store';
import NavBar from '../NavBar';
import Content from '../Content';
import { createOrder } from '../../actions/orderActions';

const store = configureStore();
store.dispatch(createOrder({
  customer_id: '0c20d921-9da4-46a5-a54c-0a8959ed0f2a',
  weight: 1.2,
  price_per_kilo: 330,
  sold_at: '2017-10-25T00:00:00+02:00',
}));

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
