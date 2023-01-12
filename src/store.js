import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { inputReducer } from './reducers/inputReducer';
import { commentsReducer } from './reducers/commentsReducer';

const logger = createLogger();

const rootReducer = combineReducers({ inputReducer, commentsReducer });
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
