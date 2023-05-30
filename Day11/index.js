"use strict";
// any 會造成 TypeScript 跳過檢測使得變數容易引發非預期行為的機率完全上升。
// 重點 1. any 出現的時機
// (1.)遲滯性指派 Delayed Iniitialization：變數定義時，除了未加註記（Type Annotation）外，也沒有指派值或者被指派為 Nullable Types。
// (2.)一般宣告下的函式參數：一般被宣告的函式，其參數通常會直接被推論為 any，又被稱作 Implicit any 的情形。此狀況是少數會被 TypeScript 主動通報的
// (3.)函式回傳之值：有些實務上，型別無法確定，因此到最後只能將回傳值預設為 any（如：JSON.parse）
// (4.)未註記之空陣列：沒有積極型別註記到的空陣列，其預設推論為 any[]
// (5.)跟 I/O 行為有關：例如，從外部 CSV 檔案讀取表格行格式（通常用陣列或元組型別），若沒有特殊註記的話，通常會用 any 作表示（這可能是讀者少數會主動用 any 的狀況）
let anyType;
let unknownType;
anyType = 123;
anyType = "123";
anyType = true;
anyType = null;
anyType = undefined;
anyType = { hello: "world" };
anyType = [1, "2", true];
anyType = () => {
    console.log(123);
};
anyType = new Object();
unknownType = 123;
unknownType = "123";
unknownType = true;
unknownType = null;
unknownType = undefined;
unknownType = { hello: "world" };
unknownType = [1, "2", true];
unknownType = () => {
    console.log(123);
};
unknownType = new Object();
let isAny;
let isUnknown;
let isNumber;
let isString;
let isBoolean;
let isNull;
let isUndefined;
let isAkindOfObjectLiteral;
let isAkindOfArray;
let isAkindOfFunction;
let isAkindOfObject;
// 任何型別的變數都可以被 any 型別所指派
isAny = isAny;
isUnknown = isAny;
isNumber = isAny;
isString = isAny;
isBoolean = isAny;
isNull = isAny;
isUndefined = isAny;
isAkindOfObjectLiteral = isAny;
isAkindOfArray = isAny;
isAkindOfFunction = isAny;
isAkindOfObject = isAny;
// 除了 unknown 本身以及 any 型別外
// 其他型別的變數都不能被 unknown 所指派
isAny = isUnknown;
isUnknown = isUnknown;
// isNumber = isUnknown;
// isString = isUnknown;
// isBoolean = isUnknown;
// isNull = isUnknown;
// isUndefined = isUnknown;
// isAkindOfObjectLiteral = isUnknown;
// isAkindOfArray = isUnknown;
// isAkindOfFunction = isUnknown;
// isAkindOfObject = isUnknown;
// 另一個直截了當可以馬上使用 unknown 的時機，就是寫一個安全的函式（或方法）把不安全的函式（或方法）包裝起來。
// 比如說，把 JSON.parse 這種會回傳 any 的方法函式包裝起來，變成：
const safelyParseJSON = (jsonString) => {
    return JSON.parse(jsonString);
};
// 直接指派一定會錯誤
// isNumber = isUnknown
// 經過所謂的 Type Guard 縮小型別推論的範疇就有可能
// 可以直接將 unknown 型別的值指派到相對應的型別
if (typeof isUnknown === "number") {
    isNumber = isUnknown;
}
// 直接跟 TypeScript 說, isUnknown 是字串
isString = isUnknown;
// 用 as 關鍵字,直接跟 TypeScript 說, isUnknown 是
// 數字型別的陣列
isAkindOfArray = isUnknown;
// any 可以做任何事情; unknown 則被鎖住
isAny.KnockKnock;
// isUnknown.Hello;
isAny.greets("He...");
// isUnknown.response("No");
let unknownObj = {
    Hello: "Charlie the Unicorn",
    response: (content) => console.log(content),
};
// 顯性註記方式去使用 unknown 型別之變數
// 無註記會被 TS 警告
// unknownObj.Hello;
// unknownObj.response('No')
// 顯性註記過後就變安全了
unknownObj.Hello;
unknownObj.response("No");
let unknownPrimitive = "123456789";
// 控制流程分析後限縮 unknown 型別到某特定型別
// 型別未確切認定下會被 TS 警告
// parseInt(unknownPrimitive,10)
// 運用控制流程分析限縮型別變安全
if (typeof unknownPrimitive === "string") {
    parseInt(unknownPrimitive, 10);
}
// 利用 unknown 建造安全版本的 JSON.parse
function safelyParseJSON2(jsonString) {
    return JSON.parse(jsonString);
}
let randomJSONString = `{
  "message":"Hello World",
  "unknownTypeIsAwesome":true
}`;
// 原本的 JSON.parse
let parsedFromNormalJSONParse = JSON.parse(randomJSONString);
parsedFromNormalJSONParse.message;
// 使用 Safe-Counterpart JSON.parse
let parsedFromSafeJSONParse = safelyParseJSON2(randomJSONString);
