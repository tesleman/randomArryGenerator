function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// for (let i = 0; i < randomInteger(1, 6); i++) {
//   console.log(randomInteger(i, 6));
// }

const nameArr = ["sadsad", "asdasdasdasd", "dasdasdas"];

function randomArryGenerator() {
  let defaulArr = [];
  for (let i = 0; i < randomInteger(4, 8); i++) {
    const item = {
      firstFieldName: nameArr[randomInteger(0, 2)],
      seconsdValue: Array(4)
        .fill(0)
        .map((e) => (e += randomInteger(0, 4)))
    };
    defaulArr.push(item);
  }
  return defaulArr;
}

console.log(randomArryGenerator());
