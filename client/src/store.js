import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';



const middlewares = [thunk];

const store = createStore(rootReducer, compose(
  applyMiddleware(...middlewares)
));



export default store;