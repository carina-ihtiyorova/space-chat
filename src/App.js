import React from "react";
import Login from "./components/Login";
import Messages from "./components/Messages";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="messages" element={<Messages />} />
      </Routes>
    </div>
  );
}

export default App;
