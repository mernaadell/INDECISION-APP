console.log('App.js is running!');
//if statement
//ternary operators
//logical and operator
var appRoot = document.getElementById('app');
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
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

const onMakeDecision=()=>{

  const randomNum=Math.floor(Math.random()*app.options.length);
  const option =app.options[randomNum];
  console.log(randomNum);
}
const onRemoveAll=()=>{
  app.options=[];
  render();
  
}
const render=()=>{
  var template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <button onClick={onMakeDecision}>What should I do ?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <ol>
  {
    app.options.map((option)=>{
      return <li key={option}>{option}</li>

    })
  }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}


render()
