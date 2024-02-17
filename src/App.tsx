import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./pages/intro";
import Projects from "./pages/projects";
import Dashboard from "./pages/dashboard";
import Pages from "./pages/dashboard/Panels/LeftPanel/Pages";
import Controls from "./pages/dashboard/Panels/LeftPanel/Controls";
import Layers from "./pages/dashboard/Panels/LeftPanel/Controls/Layers";
import Assets from "./pages/dashboard/Panels/LeftPanel/Controls/Assets";
import Database from "./pages/dashboard/Panels/LeftPanel/Controls/Database";
import Settings from "./pages/dashboard/Panels/LeftPanel/Controls/Settinggs";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Dashboard />}>
            <Route index element={<Pages />} />
            <Route path="controls" element={<Controls />}>
              <Route path="layers" element={<Layers />} />
              <Route path="assets" element={<Assets />} />
              <Route path="database" element={<Database />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
          <Route path="*" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
