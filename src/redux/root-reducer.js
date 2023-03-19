import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import coursesReducer from './courses/courses.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['courses']
};

const rootReducer = combineReducers({
    courses: coursesReducer,
});

export default persistReducer(persistConfig, rootReducer);
