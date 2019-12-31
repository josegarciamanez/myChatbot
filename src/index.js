import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import { Provider } from "react-redux";
import store from "./store";
import App from './App';
import "milligram";
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <div className="container">
            <App />
        </div>
    </Provider>,
    rootElement
);

serviceWorker.unregister();
