function sumArrayFn(arr: number[]): number {
  let sum: number = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

const numbers: number[] = [1, 2, 3, 4, 5];
const strings: string[] = ["1", "2", "3", "4"];

console.log(sumArrayFn(numbers));