import { createStore, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';

const enhancer = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const configureStore = () => (createStore(rootReducer, enhancer));

export default configureStore;
