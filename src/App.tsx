import { Routes, Route } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import AuthPage from "./pages/AuthPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import FeaturePage from "./pages/FeaturePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="/properties" element={<FeaturePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;