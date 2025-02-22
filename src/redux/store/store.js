import { configureStore, combineReducers } from "@reduxjs/toolkit";
import UserReducer from "../slice/userSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";

// combine Reducer
const rootReducers = combineReducers({
  users: UserReducer,
});
// persist cofig
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
//persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducers);
// reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
//perstsited store
const persistedStore = persistStore(store);

export { store, persistedStore };
