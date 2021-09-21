import logo from './logo.svg';
import './App.css';

let name = "Harry3";
const element = <h1>Hello, world!</h1>;
// JSX fragment <>...</> used to return h1 and div tags as ourput, else you can only return 1 Div tag
function App() {
  return (
    // <> 
    // <h1>This is me</h1>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with Harry
    //     </a>
    //   </header>
    // </div>
    // </>
    <>
    <div className="blank">Lovely</div>
        <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact us</li>
    </nav>
    <div className="conainter">
      <h1>Hello {name}</h1>
      {element} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut unde expedita asperiores. Autem voluptatem doloremque ipsa, molestias officiis in voluptate excepturi cum debitis iure, quibusdam adipisci vel blanditiis dolorum? Dolor.</div>
    </>
    
  );
}

export default App;
