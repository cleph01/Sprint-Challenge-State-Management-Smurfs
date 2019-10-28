import React from "react";
import ReactDOM from "react-dom";

//import Provider
import { Provider } from "react-redux";

//import redux store 
import { createStore, combineReducers, applyMiddleware } from 'redux';

//import thunk
import thunk from "redux-thunk";

//import logger
import logger from 'redux-logger';

//import reducers
import {fetchReducer as reducer} from './reducers/SmurfReducer';

import "./index.css";
import App from "./components/App";


const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
        
, document.getElementById("root"));
