import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ScoreboardOverlay from './component/ScoreboardOverlay';
import ScoreboardController from './component/ScoreboardController';
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
         {/* <nav className="nav-bar">
            <Link to="/overlay" className="nav-link">Overlay</Link>
            <Link to="/controller" className="nav-link">Controller</Link>
          </nav>*/}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/overlay" element={<ScoreboardOverlay />} />
            <Route path="/controller" element={<ScoreboardController />} />
          </Routes>
        </div>
      </Router>


      /*<div className="App">
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
          </a>
        </header>
      </div>*/
  );
}

function Home() {
  return (
      <div className="home">
        <h1>YouTube Live Stream Scoreboard</h1>
        <div className="home-links">
          <Link to="/overlay" className="home-button">View Overlay</Link>
          <Link to="/controller" className="home-button">Open Controller</Link>
        </div>
        <div className="instructions">
          <h3>How to use:</h3>
          <ol>
            <li>Open the <strong>Overlay</strong> page in a browser window</li>
            <li>Add this browser window as a source in OBS Studio</li>
            <li>Use the <strong>Controller</strong> page to update scores and team names</li>
            <li>Changes will appear in real-time on the overlay</li>
          </ol>
        </div>
      </div>
  );
}


export default App;
