"use strict";
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
let probablyExecutesForever = (num) => {
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
let probablyThrowsError = (num) => {
    if (num <= 0) {
        throw new Error("Not a positve number");
    }
    return num;
};
let acceptsNever = probablyThrowsError(-5);
let mustThrowError = () => {
    throw new Error("Throw new error!");
};
let mustAcceptsNever = mustThrowError();
let mustAcceptsNever2 = mustThrowError();
// 就算函式必為 never 型別，然而變數之註記型別為 number 依舊還是被 TypeScript 認定正常，因為 number 型別跟 number | never 型別完全等效
let wontThrowError = () => {
    return 42;
};
// let mustAcceptsNever: never = wontThrowError() // number 不可指派給 never
