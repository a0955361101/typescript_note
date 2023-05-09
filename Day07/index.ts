// TypeScript enum
// 請注意,定義 TypeScript 列舉時,不需要等號
// enum WeekDay1 = { Sunday, Monday,...WeekDay,Saturday }; // 這樣是語法錯誤
enum WeekDay {
  Sunday,
  Monday,
  Tuseday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

// 使用列舉時，可以用類似物件呼叫屬性的方式來表達
let weekDayOfBirthday = WeekDay.Monday; // => ts 推論為 WeekDay 列舉型態
let TGIF: WeekDay = WeekDay.Friday; // => 列舉的型別註記
