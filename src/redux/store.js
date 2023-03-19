import {createStore, applyMiddleware, compose} from 'redux';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';
import thunk from 'redux-thunk';

const composeEnhancers = (
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const middlewares = [thunk];

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistStore };
