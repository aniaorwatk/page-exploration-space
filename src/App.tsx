import { Route, Routes } from "react-router-dom";
import AlbumPage from "./component/AlbumPage";
import Information from "./component/Information/Information";
import Login from "./component/Login/Login";
import Main from "./component/Main";
import QuizPage from "./component/QuizPage/QuizPage";
import Register from "./component/Register/Register";
import RegisterSuccess from "./component/Register/RegisterSuccess/RegisterSuccess";
import Game from "./component/Game/Game";
import GameTenzies from "./component/Game/GameTenzies/GameTenzies";

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
      <Route path="/game" element={<Game />} />
      <Route path="/game-tenzies" element={<GameTenzies/>}/>
    </Routes>
  );
};

export default App;
