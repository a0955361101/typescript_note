"use strict";
// 列舉組合化名
var WeekDayEnum;
(function (WeekDayEnum) {
    WeekDayEnum[WeekDayEnum["Sun"] = 0] = "Sun";
    WeekDayEnum[WeekDayEnum["Mon"] = 1] = "Mon";
    WeekDayEnum[WeekDayEnum["Tue"] = 2] = "Tue";
    WeekDayEnum[WeekDayEnum["Wed"] = 3] = "Wed";
    WeekDayEnum[WeekDayEnum["Thu"] = 4] = "Thu";
    WeekDayEnum[WeekDayEnum["Fri"] = 5] = "Fri";
    WeekDayEnum[WeekDayEnum["Sat"] = 6] = "Sat";
})(WeekDayEnum || (WeekDayEnum = {}));
// interface 的表現形式
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender || (Gender = {}));
// 使用介面
const maxwell = {
    name: "shadow",
    age: 18,
    hasPet: false,
};
// 少一鍵會被認為錯誤 => 被 TS 警告
// const martin: Person = {
//   name: "Martin",
//   hasPet: true,
// };
// 多一鍵也會被認為錯誤 => 被 TS 警告
// const leo: Person = {
//   name: "Leo",
//   age: 55,
//   hasPet: true,
//   job: "DevOps",
// };
// 屬性對應型別錯誤 => 被 TS 警告
// const toby: Person = {
//   name: "Toby",
//   age: 33,
//   hasPet: "Crocodile",
// };
// 檢測物件被推論結果作為函式的參數狀況
// 這一次函式使用的是 interface 而不是 type alias
const printPersonInfo = (person) => {
    console.log(`Name:${person.name}`);
    console.log(`Age is:${person.age}`);
    console.log(`Owns a pet?:${person.hasPet}`);
};
// 情況一: 直接帶入狹義物件的明文格式
// printPersonInfo({
//   name: "shadow",
//   age: 20,
//   hasPet: true,
//   job: "Front-End",
//   nothingSpecial: null,
// });
// 情況二: 物件形式存入參數,型別推論過後的結果,將
// 變數作為函式的參數代入
let infoMaxwell = {
    name: "shadow",
    age: 20,
    hasPet: false,
    job: "Front-End",
    nothingSpecial: null,
};
printPersonInfo(infoMaxwell);
