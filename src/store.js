import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import { inputReducer } from './reducers/inputReducer';
// import { commentsReducer } from './reducers/commentsReducer';
import inputReducer from './slices/inputSlice';
import commentsReducer from './slices/commentsSlice';

// const logger = createLogger();

export default configureStore({
  reducer: {
    inputReducer,
    commentsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// const rootReducer = combineReducers({ inputReducer, commentsReducer });
// const store = createStore(rootReducer, applyMiddleware(logger));

// export default store;
