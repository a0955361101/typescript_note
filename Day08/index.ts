let addOp = (n1: number, n2: number) => {
  return n1 + n2;
}; // => let addOp:(n1: number, n2: number) => number;

let subtractOp = (n1: number, n2: number) => {
  return n1 - n2;
}; // => let subtractOp:(n1: number, n2: number) => number;

let multiplyOp = (n1: number, n2: number) => {
  return n1 * n2;
}; // => let multiplyOp:(n1: number, n2: number) => number;

let divideOp = (n1: number, n2: number) => {
  return n1 / n2;
}; // => let divideOp:(n1: number, n2: number) => number;

type MathOperator = (n1: number, n2: number) => number;

let powerOp: MathOperator = function (n1: number, n2: number): number {
  return n1 ** n2;
}; // => 正確結果

// let wrongPowerOp1: MathOperator = function (n1: string, n2: string) {
//   return n1 ** n2;
// }; // 型別錯誤

// let wrongPowerOp2: MathOperator = (n1: number, n2: number) => {
//   return (n1 ** n2).toString();
// }; // 錯誤 : 函式型別之回傳型別錯誤

type MathOperator2 = (n1: number, n2: number) => number;

let powerOpWithNoParamsAnnotation: MathOperator = (n1, n2) => {
  return n1 ** n2;
};

// powerOpWithNoParamsAnnotation(
//   '123',
//   '456',
// ) => string 不可指派給 number

type PersonInfo = {
  name: string;
  age: number;
  hasPet: boolean;
};
// {
//   name:'ttt',
//   age:20,
//   hasPet:true,
// }

function printInfo(info: PersonInfo) {
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
