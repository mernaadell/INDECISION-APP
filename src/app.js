console.log('App.js is running!');
//if statement
//ternary operators
//logical and operator
var appRoot = document.getElementById('app');
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};
const onFormSubmit = (e) => {
  e.preventDefault();
  console.log(app.options);
  const option = e.target.elements.option.value
  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ""
  }
  render()
}
const render=()=>{
  var template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Submit</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

var user = {
  name: 'Andrew',
  age: 26,
  location: 'Philadelphia'
};
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

render()
