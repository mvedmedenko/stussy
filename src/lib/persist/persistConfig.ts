/// <reference types="redux-persist" />
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'root',
  storage, 
  blacklist: ['authReducer',],
};

export default persistConfig;
