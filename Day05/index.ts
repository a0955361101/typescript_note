// 全部都是數字
let numbers = [1, 2, 3, 4, 5]; // => number[]

// 全部都是字串
let string = ["hi", "how are you", "goodbye"]; // => string[]

// 對陣列裡任意值覆寫
numbers[1] = 123; // => PASS
// numbers[3] = "123"; // => TS 報錯 string 不可指派給 number

// 對陣列使用方法 TS 也會幫你檢測型別
numbers.push(456); // => PASS
// numbers.push('456'); // => TS 報錯 string 不可指派給 number

numbers.concat([789, 987]); // => PASS
// numbers.concat(["789", "987"]); // => TS 報錯 string 不可指派給 number

// 對陣列全部覆寫
numbers = [666, 888, 999]; // => PASS
// numbers = ["安安", "你好"]; // => TS 報錯 string 不可指派給 number

// 數字和字串混合
let numbersAndStrings = [1, "2", 3, "ddd"]; // (string | number)[]

// 長的一模一樣格式的物件
let objectsArray1 = [
  { message: "Hello" },
  { message: "hi" },
  { message: "bye" },
]; // objectsArray1 : {message : string}[]

// 某個物件基因突變
let objectsArray2 = [
  { message: "Hello" },
  { message: "hi", revolt: true },
  { message: "bye" },
];
//objectsArray2 : ({
//   message: string;
// 	revolt? : undefined;
// 	} | {
// 	message: string;
// 	revolt : boolean;
// })[];

// 沒辦法，基因突變的方法實在太多種了，所以也不管，將就測一測
let objectsArray3 = [
  { message: "hello" },
  { message: 1010 },
  { message: "bye" },
];
// objectsArray3 : ({message:string;} | {message:number;})[]

let functionsArray = [
  function addition(num1: number, num2: number) {
    return num1 + num2;
  },
  function subtraction(num1: number, num2: number) {
    return num1 - num2;
  },
  function multiplication(num1: number, num2: number) {
    return num1 * num2;
  },
  function division(num1: number, num2: number) {
    return num1 / num2;
  },
];
// functionsArray : (num1:number,num2:number) => number[]

let arraysArray = [
  [1, 2],
  ["hello", "bye"],
  [true, false],
];
// arraysArray : (number[] | string[] | boolean[])[]

// 陷阱題
let miscellaneousArraysArray = [
  [1, 2, 3],
  ["hello", "bye"],
  [true, false, 123, null],
  ["string", undefined],
];
// miscellaneousArraysArray : ((number | string | null)[] | (string | undefined)[])[]

let canBeEitherNullOrNumbers = [1, 2, 4];

// 在 index 為 2 插入 Null 值
// canBeEitherNullOrNumbers.splice(2, 0, null); // 類型 null 不可指派給 number

let canBeEitherNullOrNumbers2: (number | null)[] = [1, 2, 4];

canBeEitherNullOrNumbers2.splice(2, 0, null); // => PASS
