import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import  thunk  from 'redux-thunk'
import { BrowserRouter,Switch } from 'react-router-dom';

import App from './containers/App/App';
import reducer from './reducer/reducers'

import 'antd/dist/antd.min.css';
import './assert/container.less';
import './assert/style.less';

const store = createStore(reducer,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension():f=>f
))
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <App />
            </Switch>
        </BrowserRouter>
    </Provider>
	, document.getElementById('root')
);
