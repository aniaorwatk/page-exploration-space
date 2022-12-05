import { useState } from "react";
import ButtonPrimary from "../../Buttons/ButtonPrimary";
import Die from "./Die/Die";
import "./GameTenzies.scss";
import { getAllDice } from "./GameTenziesHandler";

const GameTenzies = () => {

   
 const [dice, setDice]= useState(getAllDice())


  
 
 const diceArray = dice.map(item=>{
    return(
        <Die 
        value={item}
   
        />
    )
 })
   

const rollNewDice =()=>{
    setDice(getAllDice())
}


 
  return (
    <main className="diceContainerMain">
      <div className="diceContainer">

{diceArray}

<ButtonPrimary customClassName={"primary"} type={"button"} onClick={rollNewDice} buttonLabel={"Roll"}/>

      </div>
    </main>
  );
};

export default GameTenzies;
