import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './slice'

import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

// export const store = configureStore({
//   reducer: {
//     counter1: counterReducer,
//   },
// })
const reducers = combineReducers({
    counter1: CounterReducer,
  });

const persistConfig = {
    key: 'root',
    storage,
  };
  
  const persistedReducer = persistReducer(persistConfig, reducers);
  
  export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
  });