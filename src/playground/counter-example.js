// manual binding
var count = 0;
const addOne = () => {
  count++;
  renderCounterApp(); //rener the application every time i increase the counter
  console.log("add one")
};

const renderCounterApp = () => {
  var templateTwo = (
    <div>
      <h1>{user.name ? user.name : 'Anonymous'}</h1>
      {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
      {getLocation(user.location)}
      <h1>Count: {count}</h1>
      <button onClick={addOne} >Add one</button>
    </div>
  );

  var appRoot = document.getElementById('app');

  ReactDOM.render(templateTwo, appRoot);
}
renderCounterApp();