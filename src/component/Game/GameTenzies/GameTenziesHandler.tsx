import { nanoid } from "nanoid";

export function generateNewDie() {
  return {
    value: Math.ceil(Math.random() * 6),
    isHeld: false,
    id: nanoid(),
  };
}

export const getAllDice = () => {
  let arrayDices = [];
  for (let i = 0; i < 10; i++) {
    arrayDices.push(generateNewDie());
  }
  console.log(arrayDices);
  return arrayDices;
};
