import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./pages/intro";
import Projects from "./pages/projects";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
