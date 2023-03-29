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
// 原始型別 Primitive Types
// number, string, boolean, undefined, null, symbol, void
// 物件型別 Object Types
// 1.基礎物件型別：包含 JSON 物件，陣列（Array<T>或T[]），類別以及類別產出的物件（也就是 Class 以及藉由 Class new 出來的 實例(Instance)）
// 2.TypeScript 擴充型別：即 Enum 與 Tuple，內建在 TypeScript
// 3.函式型別 Function Types：類似於 (input) => (Ouput) 這種格式的型別
// 明文型別 Literal Type
// 一個值本身也可以成為一個型別，比如字串 "Hello world" —— 若成為某變數的型別的話，它只能存剛好等於"Hello world"` 字串值；但通常會看到的是 Object Literal Type
// 特殊型別 https://ithelp.ithome.com.tw/articles/10214719 (參考文章的筆者自行分類的型別)
// any、never（TS 2.0釋出）以及最新的 unknown 型別（TS 3.0釋出），陷阱總是出現在不理解這些特殊型別的特性
// 複合型別 https://ithelp.ithome.com.tw/articles/10214719 (參考文章的筆者自行分類的型別)
// union 與 intersection 的型別組合
// 這類型的型別都是由邏輯運算子組成，分別為 | 與 &
// 通用型別 Generic Types
// 施工中
// void - 代表某函數為不回傳值的狀態
// TS 自動做了型別推論（Type Inference）
let myName = 'shadow'; // => string
let _age = 20; // => number
let hasPet = false; // => boolean
let nothing = undefined; // => any
let nothingLiterally = null; // => any
// 這種 null 跟 undefined 類型的東西英文又被稱為 Nullable Types
// 型別推論的真正用意是 —— 如果設法指派其他型別的值到被推論後的變數的話，TypeScript 會提醒你並顯示警告
// 但 any 型別的變數可以隨隨便便地使用
// any 是造成型別混亂的根源，最好能夠避免就儘量避免
// _age = '20'; // TS 直接對我們的行為提出質疑 —— 認為 _age 這種東西應該要放數字，不是字串
// nothing = 'test'; // => 不會報錯
// 遲滯性指派 Delayed Initialization
// 先定義一個變數，但是不帶入任何值
let messageToSend; // 被推論為any 註 : 你對剛定義出的任何變數沒有帶入值的話，就等同於帶入 undefined 這個值的概念
// 帶入 string 跟 number 都不會報錯
messageToSend = 'String';
messageToSend = 101010;
// 避免有 any 型別的狀態發生
let absoluteNothing = undefined;
let literallyAbsoluteNothing = null;
// absoluteNothing = 123; // => 報錯
// literallyAbsoluteNothing = 'string'; => 報錯
// 具有型別但是預設為“空”值或 Nullable Types
let canBeNullableString;
canBeNullableString = 'hello'; // => ok
// canBeNullableString = undefined; => 報錯
// canBeNullableString = null; => 報錯
// 但如果是這樣
// 還沒帶入值之前，中間如果被呼叫的話就會出現問題
// 這跟 TDZ （Temporal Dead Zone，暫時性死區）的概念還蠻像的 註 : 在未確定變數被正式丟入合法的值之前的這段空間，不能使用該變數
let _canBeNullableString;
// let myString = _canBeNullableString;
_canBeNullableString = 'hello';
// 可以使用 union 將該變數註記為 <YOUR-TYPE> | <nullable-type> 的格式
let absolutelyEitherNullOrString = null;
absolutelyEitherNullOrString = 'string'; // => ok
absolutelyEitherNullOrString = null; // => ok
absolutelyEitherNullOrString = '_string'; // => ok
// 型別註記的目的
// 其中註記最大的好處，除了是讓開發者明確知道變數固定在哪個型別外，TS 也可以不用猜就知道要怎麼幫我們關注該變數
// 把 any 這個禍根給剔除
