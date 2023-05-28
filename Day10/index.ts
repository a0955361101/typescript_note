// 重點 1. never 型別的意義
// never 型別的概念是程序在函式或方法執行時：
// 無法跳脫出該函式或方法
// 出現例外結果中斷執行
let executesForever = () => {
  while (true) {
    // Stuck in here forever...
  }
}; // => TS 推論 () => never

const randomNumber = Math.random() * 10;
let probablyExecutesForever = (num: number) => {
  while (num > 5) {
    // Probably stuck in here forver...
  }
};

// Maybe 'never' or 'void' case
probablyExecutesForever(randomNumber); // TS (number) => void
// Definite 'never' case
probablyExecutesForever(6); // TS (number) => void
// Definite 'void' case
probablyExecutesForever(4); // TS (number) => void

let probablyThrowsError = (num: number): number | never => {
  if (num <= 0) {
    throw new Error("Not a positve number");
  }
  return num;
};

type EitherNumberOrNever = number | never;
// 實際上等於
// type EitherNumberOrNever = number

type T = void | never;

type U = any | never;

type MustBeNever = U & never;

let acceptsNever: number = probablyThrowsError(-5);
