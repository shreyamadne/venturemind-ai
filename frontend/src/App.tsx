import AIResultsPage from "./pages/AIResultsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import BusinessIdeaPage from "./pages/BusinessIdeaPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/results" element={<AIResultsPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/analyze" element={<BusinessIdeaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;