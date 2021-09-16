import { createStore, combineReducers, applyMiddleware } from "redux";
import ThunkMiddleware from 'redux-thunk';

import authReducer from "./reducers/auth-reducer.js";
import userReducer from "./reducers/user-reducer.js";
import productsReducer from "./reducers/products-reducer.js";

const reducers = combineReducers({
   auth: authReducer,
   profile: userReducer,
   products: productsReducer,
});

const store = createStore(reducers, applyMiddleware(ThunkMiddleware));
document.store = store;


export default store;