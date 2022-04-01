console.log('App is Running');

//single root element
var template = (<div>
    <p>This is JSX from app.js
        <h1>hello</h1>
    </p>
</div>);
var template = <p>This is JSX from app.js</p>
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot)