import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./component/Main";
import Register from "./component/Register/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
