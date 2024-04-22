import "./App.css";
import AddQuestion from "./pages/AddQuestion";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { useState } from "react";
import "@progress/kendo-theme-default/dist/all.css";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      {/* <button onClick={() => setIsOpen(true)}>Open modal</button>
      {isOpen && <LoginPage setIsOpen={setIsOpen} />} */}
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/addquestion" element={<AddQuestion />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
      {/* <div>
        <LoginPage />
        <SignupPage/>
        <AddQuestion/>
      </div> */}
    </div>
  );
}

export default App;
