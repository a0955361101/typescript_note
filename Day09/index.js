"use strict";
// 上面的 PersonInfo 型別，若某變數被積極註記過後，該變數必須完全符合的條件有以下：
// 必須有 name 屬性，對應型別為 string
// 必須有 age 屬性，對應型別為 number
// 必須有 hasPet 屬性，對應型別為 boolean
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender || (Gender = {}));
// let anotherSomeone: SomeoneUnknown = {}; // => TS 報錯缺少 knows / identity 屬性
// 重點 1. undefined 作為物件屬性的型別
// 若將 undefined 作為物件某些屬性的型別，
// 儘管 undefined 在原生 JS 的意味就是可以放置該屬性為空值，
// 甚至是不去定義的狀態。但在 TypeScript 的世界裡：
// undefined 這種原始型別代表必須存取名為 undefined 這種值，並不是完全省略定義它！
var Gender2;
(function (Gender2) {
    Gender2[Gender2["Male"] = 0] = "Male";
    Gender2[Gender2["Female"] = 1] = "Female";
    Gender2[Gender2["Other"] = 2] = "Other";
})(Gender2 || (Gender2 = {}));
let accountMaxwell = {
    account: "mordic.wyvern",
    password: "<hashed-password>",
    subscribed: false,
}; // ok
let accountMaxwell2 = {
    account: "nordic.wyvern",
    password: "<hashed-password>",
    birth: new Date(2000, 1, 2),
    subscribed: false,
};
