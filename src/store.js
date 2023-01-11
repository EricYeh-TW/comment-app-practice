import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { commentReducer } from './reducers/commentReducer';

const logger = createLogger();

const rootReducer = combineReducers({ commentReducer });
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
