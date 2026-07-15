import { Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./pages/Layout";

import Dashboard from "./pages/Dashboard";
import AuthPage from "./pages/AuthPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import FeaturePage from "./pages/FeaturePage";

function App() {
  return (
    <Routes>
      {/* Authentication page WITHOUT Navbar/Footer */}
      <Route path="/" element={<AuthPage />} />

      {/* All other pages WITH Navbar/Footer */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/properties" element={<FeaturePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
