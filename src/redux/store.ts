import {combineReducers, legacy_createStore as createStore, applyMiddleware} from "redux"
import authReducer from "./reducers/authReducer";
import thunk from "redux-thunk";
import searchReducer from "./reducers/searchReducer";
import chatReducer from "./reducers/chatReducer";
import shopReducer from "./reducers/shopReducer";
import cartReducer from "./reducers/cartReducer";
import filterReducer from "./reducers/filterReducer";
import accountReducer from "./reducers/accountReducer";
import headerReducer from "./reducers/headerReducer";
import persistConfig from "../lib/persist/persistConfig";
import persistReducer from "redux-persist/lib/persistReducer";
import persistStore from "redux-persist/lib/persistStore";

const reducers = combineReducers({
    authReducer: authReducer,
    searchReducer: searchReducer,
    chatReducer: chatReducer,
    shopReducer: shopReducer,
    cartReducer: cartReducer,
    filterReducer: filterReducer,
    accountReducer: accountReducer,
    headerReducer: headerReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
    persistedReducer,
    applyMiddleware(thunk)
  );

const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { store, persistor };