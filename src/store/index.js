import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';

const enhancer = composeWithDevTools(applyMiddleware(thunk));
const configureStore = () => (createStore(rootReducer, enhancer));

export default configureStore;
