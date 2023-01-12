import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { inputReducer } from './reducers/inputReducer';

const logger = createLogger();

const rootReducer = combineReducers({ inputReducer });
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
