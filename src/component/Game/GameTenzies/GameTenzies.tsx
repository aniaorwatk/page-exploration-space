import { useState } from "react";
import ButtonPrimary from "../../Buttons/ButtonPrimary";
import Die from "./Die/Die";
import { getAllDice } from "./GameTenziesHandler";
import "./GameTenzies.scss";


const GameTenzies = () => {
  const [isHeld, setHeld] = useState(true);
  const [dice, setDice] = useState(getAllDice(isHeld));


const holdDice =(id: number)=>{
console.log(id)

}
  const diceArray = dice.map((item) => {
    return <Die value={item.value} key={item.id} isHeld={item.isHeld} id={item.id} funClick={holdDice}/>;
  });
  const rollNewDice = () => {
    setDice(getAllDice(isHeld));
  };

  return (
    <main className="diceContainerMain">
      <div className="diceContainer">{diceArray}</div>
      <ButtonPrimary
        customClassName={"primary"}
        type={"button"}
        onClick={rollNewDice}
        buttonLabel={"Roll"}
      />
    </main>
  );
};

export default GameTenzies;
