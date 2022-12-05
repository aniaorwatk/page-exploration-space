

 export const getAllDice = () => {
    let arrayDices = [];
    for (let i = 0; i < 10; i++) {
      arrayDices.push((Math.ceil(Math.random() * 6)));
    }
    return arrayDices;
  };