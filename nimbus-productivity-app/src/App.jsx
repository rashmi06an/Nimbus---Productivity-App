import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRoutes from "./components/PrivateRoutes"; 

import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Notes from "./pages/Notes";
import About from "./pages/About";
import Timer from "./pages/Timer";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<PrivateRoutes element={<Home />} />} />
          <Route
            path="/tasks"
            element={<PrivateRoutes element={<Tasks />} />}
          />
          <Route
            path="/notes"
            element={<PrivateRoutes element={<Notes />} />}
          />
          <Route
            path="/about"
            element={<PrivateRoutes element={<About />} />}
          />
          <Route
            path="/Timer"
            element={<PrivateRoutes element={<Timer />} />}
          />
          <Route
            path="/Reports"
            element={<PrivateRoutes element={<Reports />} />}
          />
          <Route
            path="/Settings"
            element={<PrivateRoutes element={<Settings />} />}
          />
        </Routes>
        
      </div>
      <Footer />
    </Router>
  );
}

export default App;