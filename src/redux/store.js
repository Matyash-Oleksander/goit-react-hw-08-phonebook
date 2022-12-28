import { configureStore } from '@reduxjs/toolkit';
import { itemsReducer } from './itemsSlice';
import { searchReducer } from './searchSlice';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    searchValue: searchReducer,
  },
});

// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { itemsReducer } from './itemsSlice';
// import { searchReducer } from './searchSlice';

// const rootReducer = combineReducers({
//   items: itemsReducer,
//   searchValue: searchReducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['searchValue'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { createStore } from 'redux';
// import { ACTIONS } from './actions';
// import { ACTION } from '../redux/actions';

// const initialState = {
//   infoConctact: [],
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ACTIONS.addInfoConctact:
//       return {
//         ...state,
//         infoConctact: [action.payload, ...state.infoConctact],
//       };
//     default:
//       return state;
//   }
// };

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);
