import logo from './logo.svg';
import './App.css';

const element = <div tabIndex="0"></div>;
const name = "Juan Miguel";
const title = (
  <h1>Hello World {name}</h1>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {name}

          {title}
        </a>
      </header>
    </div>
  );
}

export default App;
