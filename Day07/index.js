"use strict";
// TypeScript enum
// 請注意,定義 TypeScript 列舉時,不需要等號
// enum WeekDay1 = { Sunday, Monday,...WeekDay,Saturday }; // 這樣是語法錯誤
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Sunday"] = 0] = "Sunday";
    WeekDay[WeekDay["Monday"] = 1] = "Monday";
    WeekDay[WeekDay["Tuseday"] = 2] = "Tuseday";
    WeekDay[WeekDay["Wednesday"] = 3] = "Wednesday";
    WeekDay[WeekDay["Thursday"] = 4] = "Thursday";
    WeekDay[WeekDay["Friday"] = 5] = "Friday";
    WeekDay[WeekDay["Saturday"] = 6] = "Saturday";
})(WeekDay || (WeekDay = {}));
// 使用列舉時，可以用類似物件呼叫屬性的方式來表達
let weekDayOfBirthday = WeekDay.Monday; // => ts 推論為 WeekDay 列舉型態
let TGIF = WeekDay.Friday; // => 列舉的型別註記
