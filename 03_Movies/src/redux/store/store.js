import  {createStore}  from "redux";
import { moviesReducer } from "../reducer/movieReducer";
import { composeWithDevTools } from "redux-devtools-extension";
// 1- create Store
export const store = createStore(moviesReducer,composeWithDevTools());
