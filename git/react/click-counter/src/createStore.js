import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers';
import ReduxThunk from 'redux-thunk';

export const middleware = [ReduxThunk];
export const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)

export const store = createStoreWithMiddleware(RootReducer);

