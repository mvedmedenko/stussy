import {combineReducers, legacy_createStore as createStore, applyMiddleware} from "redux"
import authReducer from "./reducers/authReducer";
import thunk from "redux-thunk";
import searchReducer from "./reducers/searchReducer";

const reducers = combineReducers({
    authReducer: authReducer,
    searchReducer: searchReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;


export default store;