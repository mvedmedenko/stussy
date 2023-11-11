import {combineReducers, legacy_createStore as createStore, applyMiddleware} from "redux"
import authReducer from "./reducers/authReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    authReducer: authReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;


export default store;