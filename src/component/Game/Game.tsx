import React from "react";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import ButtonReturn from "../Buttons/ButtonReturn/ButtonReturn";
import "./Game.scss";

const Game = () => {
  return (
    <>
      <ButtonPrimary
        customClassName={"primary"}
        type={"button"}
        linkName={"/game-tenzies"}
        linkLabel={"Game Tenzies"}
      />
      <ButtonReturn />
      <div className="gameMain">gamefjdfkdjflkdlj</div>
    </>
  );
};

export default Game;
