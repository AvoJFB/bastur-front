import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  orders: orderReducer,
  form: formReducer,
});

export default rootReducer;
