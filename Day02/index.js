"use strict";
// 註記形式 (一) : 註記在變數名稱後
const message = 'Hello World';
const mayReturnEitherStringOrNumber = (b) => {
    if (b) {
        return '20';
    }
    else {
        return 20;
    }
};
// 註記形式 (二) : 註記在未知的值
const age = mayReturnEitherStringOrNumber(false);
console.log('age:', typeof age); // => number
// 註記形式 (三) : 註記在未知的值，但是是用 as 的 TS 關鍵字
const ageAsString = mayReturnEitherStringOrNumber(true);
console.log('ageAsString:', typeof ageAsString); // => string
