'use strict';

console.log('App is Running');

//single root element
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'p',
        null,
        'This is JSX from app.js',
        React.createElement(
            'h1',
            null,
            'hello'
        )
    )
);
var template = React.createElement(
    'p',
    null,
    'This is JSX from app.js'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
