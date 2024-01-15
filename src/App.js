import logo from "./dictionary-logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          This project was coded with ❤️ by{" "}
          <a
            href="https://github.com/geisalopes/dictionary-project"
            target="_blank"
          >
            Geisa Lopes
          </a>
        </footer>
      </div>
    </div>
  );
}
