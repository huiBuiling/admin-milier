import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import { BrowserRouter,Switch } from 'react-router-dom'

import 'antd/dist/antd.min.css';
import './assert/container.less';
import './assert/style.less';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <App />
        </Switch>
	</BrowserRouter>
	, document.getElementById('root')
);
