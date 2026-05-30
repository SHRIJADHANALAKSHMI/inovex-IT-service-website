import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProjectTracker from "./pages/ProjectTracker";
import ClientDashboard from "./pages/clientDashboard";
import Chat from "./pages/Chat";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
  path="/tracker"
  element={<ProjectTracker />}
/>
<Route
  path="/client-dashboard"
  element={<ClientDashboard />}
/>
<Route
  path="/chat"
  element={<Chat />}
/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;