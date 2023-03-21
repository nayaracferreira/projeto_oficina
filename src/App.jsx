import oficina from "./assets/logo.oficina.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={oficina} className="App-logo" alt="logo" />
        <p>SITE DA OFICINA EM CONSTRUÇÃO.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Praticando React
        </a>
      </header>
    </div>
  );
}

export default App;
