"use strict";
// 正常使用方式
let normalDictionary = {
    hello: "world",
    thisFeatrue: "is crazy",
};
let stringTypedArray = {
    123: "Hello",
    [456]: "Hi",
};
// 空的狹義物件狀態也行
let emptyDictionary = {};
// 但不可以直接變成 Array
// let stringTypedArrayLiteral:StringTypedList = [1,2,3]
// 但卻可以為空的 Array
let emptyStringTypedArray2 = [];
// 可以用數字進行索引
stringTypedArray[0];
stringTypedArray[1];
let sampleAccount = {
    email: "132@gmail.com",
    password: "<hashed-password>",
    name: "Maxwell",
};
// 可以讀取
sampleAccount.email;
const createCounter = () => {
    let value;
    let initializedNumber;
    // 實踐純函式的部分
    const counter = function (startNumber) {
        initializedNumber = startNumber;
        value = startNumber;
    };
    // 實踐狹義物件格式部分
    counter.increment = function () {
        value++;
        return value;
    };
    counter.reset = function () {
        value = initializedNumber;
    };
    Object.defineProperty(counter, "value", {
        get() {
            return value;
        },
    });
    return counter;
};
// 建立一個 counter 物件
const counter = createCounter();
// 藉由 Counter 介面裡面中,純函式型別裡的格式:
// (start: number): void
// 可以填入數字
counter(5); // 初始化值為5
// 呼叫 Counter 介面裡的 value 屬性
console.log(counter.value); // 應該要出現5
// 呼叫 3 次 Counter 介面裡的 increment 方法
counter.increment();
counter.increment();
counter.increment();
// 再呼叫一次 Counter 介面裡的 value 屬性
console.log(counter.value); // 應該要得出 8
// 呼叫 Counter 介面裡的 reset 方法
counter.reset();
// 再呼叫一次 Counter 介面裡的 value 屬性
console.log(counter.value); // 應該要得出 5 ,也就是原本的初始值
