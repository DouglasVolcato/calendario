import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { MainComponent } from "./MainComponent";

function App() {
  return (
    <Router>
      <header className="Header">
        <div>This a multicontaier application</div>
        <div>
          <Routes>
            <Route path="/" element={<MainComponent />} />
          </Routes>
        </div>
      </header>
    </Router>
  );
}

export default App;
