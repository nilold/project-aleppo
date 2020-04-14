import React from 'react';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk"
import logger from "redux-logger"
import {Provider} from "react-redux"
import {decode, encode} from 'base-64';

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

import rootReducer from "./store/rootReducer";
import Navigator from "./navigation/navigation";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default function App() {
    return (
        <Provider store={store}>
            <Navigator/>
        </Provider>
    );
}