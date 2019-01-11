import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { standard as rules } from './a11y/react-a11y-rules';

if (process.env.NODE_ENV === 'development') {
    const a11y = require('react-a11y').default;
    a11y(React, ReactDOM, {
        rules
    });
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
