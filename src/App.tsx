import React from "react";
import { Route, Routes } from "react-router-dom";
import AlbumPage from "./component/AlbumPage";
import Login from "./component/Login/Login";
import Main from "./component/Main";
import QuizPage from "./component/QuizPage/QuizPage";
import Register from "./component/Register/Register";
import RegisterSuccess from "./component/Register/RegisterSuccess/RegisterSuccess";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register-success" element={<RegisterSuccess />} />
      <Route path="/login" element={<Login />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/album" element={<AlbumPage />} />
    </Routes>
  );
};

export default App;
