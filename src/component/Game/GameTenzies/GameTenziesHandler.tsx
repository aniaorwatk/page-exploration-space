export const getAllDice = (isHeld:boolean) => {
  let arrayDices = [];
  for (let i = 0; i < 10; i++) {
    arrayDices.push({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: i,
    });
  }
  console.log(arrayDices);
  return arrayDices;
};
