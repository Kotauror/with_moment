import logo from './logo.svg';
import './App.css';
import moment from "moment-timezone"

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
          Learn React
          {formatDate("2021-05-27T12:39:41+00:00")}
        </a>
      </header>
    </div>
  );
}

export function formatDate(date) {
  return moment(date)
    .format("MM/DD/YYYY H:mmA")
}



export default App;
