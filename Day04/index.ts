// 函式型別 Function Types
let aSimpleFunction = () => console.log('hi'); // () => void 
// 這個函式格式 —— 它的輸入端是空的，輸出端是 void 代表的也是空值，或者代表不回傳的狀態。


// const addition = (num1, num2) => num1 + num2; // 參數被推論為 any => 報錯

// const addition = (param1, param2) => param1 + param2; // 被推論為 any => 報錯

let addition = (param1: number, param2: number) => param1 + param2;  // => ok

// let shouldBeString: string = addition(123,456) // => 類型 number 不可指派給 string

let addition2 = (num1: number, num2: number): number => num1 + num2; // 如何註記輸出部分

const aJSONString = '{"Hello":"World","luckyNumber":14}';
// TS 不會鳥你的狀況
let parsedJSON = JSON.parse(aJSONString);

// 接受 TS 型別系統的擁抱
let parsedJSON1 = JSON.parse(aJSONString) as { hello: string, luckyNumber: number; };
let parsedJSON2 = <{ hello: string, luckyNumber: number; }>JSON.parse(aJSONString);
let parsedJSON3: { hello: string, luckyNumber: number; } = JSON.parse(aJSONString);

let parsedJSON4 = JSON.parse(aJSONString); // => any