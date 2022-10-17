import React from "react";
import { Route, Routes } from "react-router-dom";
import AlbumPage from "./component/AlbumPage";
import SingleArticle from "./component/Information/Article/SingleArticle";
import Information from "./component/Information/Information";
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
      <Route path="/information" element={<Information />} />
      <Route path="/:id" element={<SingleArticle />} />
    </Routes>
  );
};

export default App;
