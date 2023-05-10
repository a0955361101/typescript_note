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
let valueOfTGIF = WeekDay[TGIF]; // => 逆向使用列舉,推論結果為字串型別

// 列舉可以藉由 TypeScript 的 enum 關鍵字進行定義。若我們想定義列舉型別 E，其內含的元素為 V1, V2 ... Vn
// 定義列舉型別後，使用該列舉的值並代入到變數時，TypeScript 對於該變數的型別推論是 enum 型別
// 定義列舉型別後，可直接使用列舉的名稱作為型別註記
// 列舉具有反射性，所以可以藉由列舉呼叫元素出來的結果反查該元素本身的名稱
// 列舉的潛規則:
// 1.列舉可以被當成 JSON 物件看待(比如說也可以用 for...in... 迴圈迭代列舉的元素);
// 但與 JSON 物件的差別在於,使用列舉會獨立為 enum 型別,而 JSON 物件本身就是一種物件型別
// 2.列舉裡的元素,每一個對應值是從數字0開始,每列一個元素會遞增上去
// 3.列舉裡的元素可以自訂對應的數字,會續會一直不停地遞增上去
// 4.列舉裡的元素可以自訂對應的字串,但是必須接續訂立對應的字串值下去,或者是再返回定義對應值為數字型別
// 5.可以使用列舉裡定義過後的值進行後續自訂對應值的運算
enum E {
  V1,
  V2,
  V3,
  V4,
  Vn,
}
