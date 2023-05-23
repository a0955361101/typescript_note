"use strict";
let addOp = (n1, n2) => {
    return n1 + n2;
}; // => let addOp:(n1: number, n2: number) => number;
let subtractOp = (n1, n2) => {
    return n1 - n2;
}; // => let subtractOp:(n1: number, n2: number) => number;
let multiplyOp = (n1, n2) => {
    return n1 * n2;
}; // => let multiplyOp:(n1: number, n2: number) => number;
let divideOp = (n1, n2) => {
    return n1 / n2;
}; // => let divideOp:(n1: number, n2: number) => number;
let powerOp = function (n1, n2) {
    return n1 ** n2;
}; // => 正確結果
let powerOpWithNoParamsAnnotation = (n1, n2) => {
    return n1 ** n2;
};
// {
//   name:'ttt',
//   age:20,
//   hasPet:true,
// }
function printInfo(info) {
    console.log(`Name: ${info.name}`);
    console.log(`Age: ${info.age}`);
    console.log(`Has Pet: ${info.hasPet}`);
}
// 物件的形式沒有被積極註記為 PersonalInfo ,直接將值暴力帶入函式作為參數
printInfo({
    name: "Martin",
    age: 28,
    hasPet: true,
    // hello: "world", => TS 報錯 printInfo 中沒有 hello 這個屬性
    // nothingSpecial: null,
});
// 物件的形式存入變數,其中該變數沒有被積極註記為 PersonInfo ,該變數卻被代入函式作為參數
let infoAboutMartin = {
    name: "Martin",
    age: 28,
    hasPet: true,
    hello: "world",
    nothingSpecial: null,
};
printInfo(infoAboutMartin);
