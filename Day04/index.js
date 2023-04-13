// 函式型別 Function Types
var aSimpleFunction = function () { return console.log('hi'); }; // () => void 
// 這個函式格式 —— 它的輸入端是空的，輸出端是 void 代表的也是空值，或者代表不回傳的狀態。
// const addition = (num1, num2) => num1 + num2; // 參數被推論為 any => 報錯
// const addition = (param1, param2) => param1 + param2; // 被推論為 any => 報錯
var addition = function (param1, param2) { return param1 + param2; }; // => ok
// let shouldBeString: string = addition(123,456) // => 類型 number 不可指派給 string
var addition2 = function (num1, num2) { return num1 + num2; }; // 如何註記輸出部分
var aJSONString = '{"Hello":"World","luckyNumber":14}';
// TS 不會鳥你的狀況
var parsedJSON = JSON.parse(aJSONString);
// 接受 TS 型別系統的擁抱
var parsedJSON1 = JSON.parse(aJSONString);
var parsedJSON2 = JSON.parse(aJSONString);
var parsedJSON3 = JSON.parse(aJSONString);
var parsedJSON4 = JSON.parse(aJSONString); // => any
// 函式型別的覆寫
// 原本的 addition : 型別為 (number, number) => number
// 覆寫的 addition : 型別為 (number, number) => number
addition = function (param1, param2) { return param2 + param1; }; // <- 交換位子
// 錯誤的覆寫 addition : 參數型別錯誤 (string, string) => string
// addition = (param1: string, param2: string) => param1 + param2;
// 錯誤的覆寫 addition : 參數型別錯誤 (number, number) => void
// addition = (param1: number, param2: number) => {
//     param1 + param2;
// };
// 結論: 格式一但錯誤就不能被覆寫
// 函式不回傳值的狀態：void
// 若定義的函式不回傳值的話，不管有沒有被註記，型別推論結果會被認定為 void
// 函式主動回傳 undefined
var doesItWork1 = function () { return undefined; };
// 函式輸出型別註記為 undefined ，也回傳 undefined
var doesItWork2 = function () { return undefined; };
// 函式輸出型別註記為 undefined ，但不回傳任何東西
// let doesItWork3 = ():undefined => {
// Empty and returns nothing
// }
// 函式輸出型別註記為 void ，但回傳 undefined
var doesItWork4 = function () { return undefined; };
