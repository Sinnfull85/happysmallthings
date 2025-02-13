import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Add from "./components/Add";
import Profile from "./components/Profile";
import Layout from "./components/Layout"; // Neues Layout für die Seiten
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Nur auf "/" sichtbar */}
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
