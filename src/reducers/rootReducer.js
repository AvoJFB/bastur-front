import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import orderReducer from './orderReducer';
import customerReducer from './customerReducer';

const rootReducer = combineReducers({
  orders: orderReducer,
  customers: customerReducer,
  form: formReducer,
});

export default rootReducer;
