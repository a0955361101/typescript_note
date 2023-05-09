"use strict";
let numbers = [1, 2, 3, 4, 5];
let mappedNumbers = numbers.map((num) => num * 2);
// 不熟悉 ES6 Arrow Function 語法，可以將它的寫法等化為:
// let mappedNumbers = numbers.map(function(num)){retrun num * 2};
let nums = [1, 2, 3, 4, 5];
let doubledNums = [];
for (let i = 0; i < nums.length; i++) {
    const originalValue = nums[i];
    doubledNums.push(originalValue * 2);
}
numbers.push(666); // => OK
// 不同方式進行型別註記
let BMWMotor = ["BMW", "motorcycle", "silver", new Date(2023, 1, 26)];
let BMWMotor2 = [
    "BMW",
    "motorcycle",
    "silver",
    new Date(2023, 1, 26),
];
let JaguarOffRoad = [
    "Jaguar",
    "off-road",
    "royal-bule",
    new Date(2022, 1, 26),
];
let ToyotaRv = [
    "Toyota",
    "recreational",
    "ivory-white",
    new Date(2021, 1, 26),
];
// let v1: typeName = [new Date(2000, 1, 26), "0", "1", "2"]; // 這樣就會報錯 因為格式不符合 [string, string, string, Date]
