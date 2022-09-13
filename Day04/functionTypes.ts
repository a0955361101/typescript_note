// 函式物件的推論結果 () => void
// 輸出端是 void 代表的也是空值，或者代表不回傳的狀態。
let aSimpleFunction = function () {
    console.log('Hi')
}
// 因為參數沒有給型別，所以出了提示
// const addition = function (num1, num2) {
//     return num1 + num2
// }

// 如果 TS 真的把函式的參數當成 any，那讀者可真的就得小心了。
// 在這裡我們強制將參數註記為 any，以下的程式碼連 TypeScript 也不會想鳥你的。
const addition = function (param1: any, param2: any) {
    return param1 + param2
}
// 這邊故意犯錯，但TS沒有發出任何警訊。
let shouldBeString: string = addition(123, 456)

//  Implicit Any
// 大部分的情況下，只要定義任何函式，TypeScript 通常會無條件推論函式內的參數（Parameters）為 any 型別，這種現象我們稱之為 Implicit Any。
// 曾經遇過呼叫API拿到的資料本該是number，但解析出來的結果是string類型。
// 這種情況要除錯有一點麻煩，數字的字串加數字的字串還是等於長得很像數字的字串，但是是那種沒數字計算意義上的行為。
let number1 = addition('3', '4')
// => '34'
let number2 = addition(3, 4)
// => 7

// 函式的參數註記
let additionNumber = function (num1: number, num2: number) {
    return num1 + num2
}
// 這邊就會提醒你型別錯誤
let newShouldBeString: string = additionNumber(123, 456)

// JSON.parse
// (method) JSON.parse(text: string, reviver?: ((this: any, key: string, value: any) => any) | undefined): any <-- 這個any是為我們的輸出型別

const aJSONString = '{"Hello":"World","luckyNumber":14}'
// TS 不會鳥你的狀況
let parsedJSON = JSON.parse(aJSONString)

// 接受 TS 型別系統的擁抱
let parsedJSON1 = JSON.parse(aJSONString) as {
    hello: string
    luckyNumber: number
}
let parsedJSON2 = <{ hello: string; luckyNumber: number }>(
    JSON.parse(aJSONString)
)
let parsedJSON3 = ({ hello: string, luckyNumber: number } =
    JSON.parse(aJSONString))

//遇到函式是回傳 any 型別的值，我們必須主動對該值作型別註記（Type Annotation），找回開發 TypeScript 的優勢

// 原本的 additionA 型別為 (number,number) => number
let additionA = function (param1: number, param2: number) {
    return param1 + param2
}

// 覆寫 additionA : 其型別為 (number,number) => number
additionA = function (param1: number, param2: number) {
    return param2 + param1 // <- 交換位置而已
}

// 錯誤的覆寫 addition: 參數型別錯誤 ! 其型別為 (string,string)=>string
// 參數型別錯了，因此被 TS 提醒
additionA = function (param1: string, param2: string) {
    return param1 + param2
}

// 錯誤的覆寫 addition: 參數型別錯誤 ! 其型別為 (number,number) => void
// 就連忘記回傳值也會被提醒喔
additionA = function (param1: number, param2: number) {
    param1 + param2
}

// 驗證廣義物件完整性的定律，結論是格式一但錯誤就不能被覆寫

// * 函式不回傳值的狀態：void
// 若定義的函式不回傳值的話，不管有沒有被註記，型別推論結果會被認定為 void

// 函式主動回傳 undefined
let doesItWork1 = function doesItWork1() {
    return undefined
}
// 函式輸出型別註記為 undefined ， 也回傳 undefined
let doesItWork2 = function doesItWork2(): undefined {
    return undefined
}
// 函式輸出型別註記為 undefined ， 但不回傳任何東西
// 這裡會提示說若函式宣告非 any 或 void 必須有回傳值
let doesItWork3 = function doesItWork3(): undefined {
    // Empty and returns nothing
}
// 函式輸出型別註記為 void ， 但回傳 undefined
let doesItWork4 = function doesItWork4(): void {
    return undefined
}
