import {combineReducers, legacy_createStore as createStore, applyMiddleware} from "redux"
import authReducer from "./reducers/authReducer";
import thunk from "redux-thunk";
import searchReducer from "./reducers/searchReducer";
import chatReducer from "./reducers/chatReducer";
import shopReducer from "./reducers/shopReducer";
import cartReducer from "./reducers/cartReducer";
import filterReducer from "./reducers/filterReducer";

const reducers = combineReducers({
    authReducer: authReducer,
    searchReducer: searchReducer,
    chatReducer: chatReducer,
    shopReducer: shopReducer,
    cartReducer: cartReducer,
    filterReducer: filterReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;


export default store;