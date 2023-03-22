import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { getProductsReducer } from "./reducers/productReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  getProducts: getProductsReducer,
});

const middleware = [thunk];

const store = configureStore(
  { reducer: reducers },
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
