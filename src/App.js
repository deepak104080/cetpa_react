import logo from './logo.svg';
import './App.css';

// const temp = `<div class></div>`;

function App() {
  var location = 'GGN';

  // class - css - className
  // components - class and functional

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Altudo - {location}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;




// JSX - JS + HTML / Templating Mechanism (Angular, Express, Laravel, )


// Virtual DOM

// obj - one orginal copy of dom


// re-render component
// obj2 - another copy of dom
// shallow comparison and deep comparison

// list of changes - node
//render to html - implement it on actual dom

// document.getElementById.value = new value


// SPA


// Type of Component : -
// Class Component - class - React Features
// Functional Component - function - static html





// Till React 16.7 (16.8 - Hooks (jugad of react features))