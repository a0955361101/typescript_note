// 定義一種物件型別 Dictionary ,其中,它的鍵值對都是字串型態
type Dictionary = {
  [propName: string]: string;
};

// 定義類似陣列的型別,其裡面儲存的值為字串
interface StringTypedList {
  [index: number]: string;
}

// 正常使用方式
let normalDictionary: Dictionary = {
  hello: "world",
  thisFeatrue: "is crazy",
};

let stringTypedArray: StringTypedList = {
  123: "Hello",
  [456]: "Hi",
};

// 空的狹義物件狀態也行
let emptyDictionary: Dictionary = {};

// 但不可以直接變成 Array
// let stringTypedArrayLiteral:StringTypedList = [1,2,3]

// 但卻可以為空的 Array
let emptyStringTypedArray2: StringTypedList = [];

// 可以用數字進行索引
stringTypedArray[0];
stringTypedArray[1];

// 錯誤的使用方式
// 基本上，只要屬性對應的值非字串的話，就會被 TypeScript 警告
// let wrongDictionary: Dictionary = {
//   hello: 123,
//   thisFeatrue: true,
//   withFunction() {
//     console.log("Wrong type!");
//   },
//   nestedDictionary: { hello: 123 },
// };

// let wrongStringTypedArray: StringTypedList = {
//   message: "Hello",
//   thisFeatrue: true,
// };

// 不能被字串索引
// stringTypedArray['hello']

// 不能用.來呼叫屬性,因會被當字串
// stringTypedArray.hello

// Interface 介面的意義是規格

// Type 型別的意義則是靜態的物件型別格式

// 唯讀屬性 Readonly Property
type TAccountUserWithReadonlyProperty = {
  readonly email: string;
  readonly password: string;
  name?: string;
  age?: number;
};

interface IAcoountUserWithReadonlyProperty {
  readonly email: string;
  readonly password: string;
  name?: string;
  age?: number;
}

let sampleAccount: TAccountUserWithReadonlyProperty = {
  email: "132@gmail.com",
  password: "<hashed-password>",
  name: "Maxwell",
};

// 可以讀取
sampleAccount.email;

// 不能寫入
// sampleAccount.email = "456@gmail.com";

// 混合型介面 Hybrid Type Interface
interface Counter {
  // 純函式格式
  (start: number): void;

  // 狹義物件格式
  increment(): number;
  reset(): void;
  value: number;
}

const createCounter = (): Counter => {
  let value: number;
  let initializedNumber: number;
  // 實踐純函式的部分
  const counter = function (startNumber: number) {
    initializedNumber = startNumber;
    value = startNumber;
  } as Counter;
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
const counter: Counter = createCounter();

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
