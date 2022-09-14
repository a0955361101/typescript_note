// 全都是數字 - 型別推論為number
let numbers = [1, 2, 3, 4, 5]
// 全都是字串 - 型別推論為string
let strings = ['hi', 'how are you', 'goodbye']
// 對陣列裡的值進行覆寫
numbers[1] = 123 // 可以
numbers[3] = '123' // 報錯
// 對陣列使用方法 TS 也會幫忙檢查型別
numbers.push(456) // 可以
numbers.push('456') // 報錯

numbers.concat([789, 987]) // 可以
numbers.concat(['789', '987']) // 報錯
// 對陣列全部覆寫
// 只要覆蓋的值型別不變，你愛怎麼蓋就怎麼蓋
numbers = [666, 888, 999] // 可以
numbers = ['安安', '尼好', '世界'] // 報錯
// TS怎麼知道如果是number[]型別的陣列，呼叫了push方法就會確認是否填入正確型別的值?
// （在 number[] 這個範例裡，TS 確保 push 方法的參數帶入的型別必須是 number 而非其他型別）

// 數字和字串混合 - 推論出 (string | number) []
let numbersAndStrings = [
    1,
    '2',
    42,
    666,
    "Devils don't actually like to wear Prada!",
]

// 長的一模一樣格式的物件 - 推論{message:string}[]
let objectsArray1 = [
    { message: 'Hello' },
    { message: 'Hi' },
    { message: 'Goodbye' },
]
// 某個物件故意不同 - 推論 (
//  {
//  message:string
//  revolt?:undefined
//  } | {
//  message:string
//  revolt:boolen
//})[]
let objectsArray2 = [
    { message: 'Hello' },
    { message: 'Hi', revolt: true },
    { message: 'Goodbye' },
]
// 故意不同 - 推論({
//  message:string
//  } | {
//  message:number
//})[]
let objectsArray3 = [
    { message: 'Hello' },
    { message: 10100101110110 },
    { message: 'Goodbye' },
]

// 陣列的型別推論
// (集合 S 裡所有型別 `union` 的結果)[]
// 推論為 - ((num1:number,num2:number) => number)[]
let functionsArray = [
    function addition(num1: number, num2: number) {
        return num1 + num2
    },
    function subtraction(num1: number, num2: number) {
        return num1 - num2
    },
    function multiplication(num1: number, num2: number) {
        return num1 * num2
    },
    function division(num1: number, num2: number) {
        return num1 / num2
    },
]

// 另外一種例子
// 套入公式 - ((num1:number,num2:number) => number)[]
// 推論為(number[] |string[] |boolean[])[]
let arraysArray = [
    [1, 2],
    ['Hello', 'world', 'AABAA', 'CBa', 'yo'],
    [true, false, true],
]

// 陷阱題
// 推論會是 ((number|boolean|null)[]|(string|undefined)[])[]
let miscellaneousArraysArray = [
    [1, 2, 3],
    ['Hello', 'World'],
    [true, false, 123, null],
    ['String', undefined],
]

// 測試 - 推論為({ message: string, revolt?: boolean | undefined })[]
let objectsArray4: { message: string; revolt?: boolean }[] = [
    { message: 'Hello' },
    { message: 'Hi', revolt: undefined },
    { message: 'Goodbye', revolt: true },
]
// 初始化一個空陣列 - 推論為any[]
let emptyArray = []
// 練習
let canBeEitherNullOrNumbers: (number | null)[] = [1, 2, null]
// 1. 大部分的狀態下，陣列型別的推論是符合開發者期待的
// 2. 除非遇到以下狀況，才需要對儲存陣列型別的變數積極地作型別註記：
// 空陣列值必須積極註記
// 陣列裡的元素沒有你要求的型別
// 3. 為了程式碼的可讀性，通常一個陣列擁有多個型別的話（也就是 Heterogenous Type Array），建議還是用 union 註記一下，不然要在陣列裡面用人眼遍歷過陣列的每一個值對應的每個型別 —— 跟直接註記比起來：型別註記是比較恰當的選擇喔
