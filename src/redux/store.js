import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';



  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  
  const persistedReducerContact = persistReducer(persistConfig, contactReducer);
  const persistConfigFilter = {
    key: 'filter',
    version: 1,
    storage,
  };
  const persistedReducerFilter = persistReducer(persistConfigFilter, filterReducer);

 export  const store = configureStore({
reducer: {
    contacts: persistedReducerContact,
    filter: persistedReducerFilter,
},
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
})
 })
export let persistor = persistStore(store);