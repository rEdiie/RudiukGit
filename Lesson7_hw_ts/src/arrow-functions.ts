const sumArrayArrow = (arr: number[]): number => {
  return arr.reduce((acc, cur) => acc + cur, 0);
};

const numArray: number[] = [10, 20, 30];
const strArray: string[] = ["a", "b", "c"];

console.log(sumArrayArrow(numArray));