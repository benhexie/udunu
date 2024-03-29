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
import SetupOverlay from "./pages/projects/overlay/SetupOverlay";
import ControlIndex from "./pages/dashboard/Panels/LeftPanel/Controls/ControlIndex";
import Legal from "./pages/legals/Legal";
import Tac from "./pages/legals/Tac";
import Privacy from "./pages/legals/Privacy";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/projects" element={<Projects />}>
            <Route path="setup" element={<SetupOverlay />}>
              <Route path=":framework" />
              <Route path={`github/:url`} />
            </Route>
          </Route>
          <Route path="/project/:id" element={<Dashboard />}>
            <Route index element={<Pages />} />
            <Route path="controls" element={<Controls />}>
              <Route index element={<ControlIndex />} />
              <Route path="layers" element={<Layers />} />
              <Route path="assets" element={<Assets />} />
              <Route path="database" element={<Database />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
          <Route path="/legal" element={<Legal />}>
            <Route path="terms" element={<Tac />} />
            <Route path="privacy" element={<Privacy />} />
          </Route>
          <Route path="*" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
