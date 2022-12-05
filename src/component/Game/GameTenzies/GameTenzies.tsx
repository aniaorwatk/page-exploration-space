import { useEffect, useState } from "react";
import ButtonPrimary from "../../Buttons/ButtonPrimary";
import Die from "./Die/Die";
import { generateNewDie, getAllDice } from "./GameTenziesHandler";
import labels from "../../../labels";
import "./GameTenzies.scss";

const GameTenzies = () => {
  const [dice, setDice] = useState(getAllDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allDiceHeld = dice.every((die) => die.isHeld === true);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allDiceHeld && allSameValue) {
      setTenzies(true);
    }

    console.log(firstValue);
  }, [dice]);

  const rollNewDice = () => {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    }else{
        setTenzies(false)
        setDice(getAllDice())
    }
  };

  const holdDice = (id: string) => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };

  const diceArray = dice.map((item) => {
    return (
      <Die
        value={item.value}
        key={item.id}
        isHeld={item.isHeld}
        id={item.id}
        funClick={holdDice}
      />
    );
  });

  const LabelBtn: string = tenzies ? "New Game" : "Roll";

  return (
    <main className="diceContainerMain">
      {tenzies && "Wygrałeś!!!!!!!!!"}
      <h2 className="diceContainerMain__title">{labels.gameTenzies.title}</h2>
      <p>{labels.gameTenzies.description}</p>
      <div className="diceContainer">{diceArray}</div>
      <ButtonPrimary
        customClassName={"primary"}
        type={"button"}
        onClick={rollNewDice}
        buttonLabel={LabelBtn}
      />
    </main>
  );
};

export default GameTenzies;
