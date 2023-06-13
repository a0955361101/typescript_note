"use strict";
// 按照數學推理理應只有三種組合
// 1. 只有 UserInfo1
let maxwellOnlyInfo1 = {
    name: "Maxwell",
    age: 20,
};
// 2. 只有 UserInfo2
let maxwellOnlyInfo2 = {
    hasPet: false,
    ownsMotorcycle: true,
};
// 3.都有
let maxwellOnlyInfo3 = {
    name: "Maxwell",
    age: 20,
    hasPet: false,
    ownsMotorcycle: true,
};
// 理應要錯誤的組合
// 1. UserInfo1 和 UserInfo2 皆缺屬性:保證錯
// let maxwellWithPartialInfo1: UnionSet2 = {
//   name: "Maxwell",
//   // age: 20, <-- 缺少
//   // hasPet: false, <-- 缺少
//   ownsMotorcycle: true,
// };
// 2. UserInfo1 滿足但 UserInfo2 有缺屬性
let maxwellWithPartiaLInfo2 = {
    name: "Maxwell",
    age: 20,
    // hasPet: false, <-- 缺這個屬性
    ownsMotorcycle: true,
};
// 3. UserInfo2 滿足但 UserInfo1 有缺屬性
let maxwellWithPartialInfo3 = {
    // name: 'Maxwell', <-- 缺這個屬性
    age: 20,
    hasPet: false,
    ownsMotorcycle: true,
};
// 正確格式,所有屬性都必須出現
let correctInfo = {
    name: "shadow",
    age: 25,
    hasPet: false,
    ownsMotorcycle: true,
};
// 使用 (...args:number[]):number 的方式
// F(1, 2, 3, 4, 5);
// 結果是 1 + 2 + 3 + 4 + 5 = 15
// F([1, 2, 3, 4, 5]);
// 結果也是 1 + 2 + 3 + 4 + 5 = 15
let F = (p1, ...args) => {
    if (
    // Type Guard 實踐 : 確保 p1 是數字, arr 是數字型陣列
    typeof p1 === "number" &&
        args instanceof Array) {
        // 將 p1 與 arr 裡面的值加總起來
        return args.reduce((acc, cur) => acc + cur, p1);
    }
    else if (
    // Type Guard 實踐 : 確保 p1 是陣列
    p1 instanceof Array) {
        // 因為 p1 被認為是陣列,因此加總起來
        return p1.reduce((acc, cur) => acc + cur, 0);
    }
    // 滿足 `never` 的 Case
    throw new Error(`Smoething is wrong with your input`);
};
console.log(F(1, 2, 3, 4, 5));
console.log(F([1, 2, 3, 4, 5]));
