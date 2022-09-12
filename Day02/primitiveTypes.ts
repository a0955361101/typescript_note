// 這裡我們並沒有對這些變數的定義做型別的註記
// 滑鼠停留在變數名上面可以看到像(let myName: string的說明)，就是所謂的型別推論(Type Liference)
// 這裡需注意的是undefined與null都被推論成any，這裡先記好Nullable Types 被認為是 any 型別的特性就 OK 了。
let myName = 'Maxwell'
let age = 20
let hasPet = false
let nothing = undefined
let nothingLiterally = null

// 但是型別推論的真正用意是，如果設法指派其他型別的值到被推論後的變數的話，TypeScript 會提醒你並顯示警告。

// 這裡會提示不能指派string給number類型
age = '20'

//  對 any 型別的變數進行變數的指派動作都不會被 TS 視為警告。
// any是造成型別混亂的根源，應該儘量避免變數的型別被視為any。(極少數狀況會用到)

// 遲滯性指派 Delayed Initialization
let messageToSend
// 如果像這樣宣告了一個變數然後不跟TS講好是什麼型別的話，推論都會是any型別
// 其實原理很簡單：你對剛定義出的任何變數沒有帶入值的話，就等同於帶入 undefined 這個值的概念，也就回到我們剛剛所講的 Nullable Type。

// 為了避免這種情況發生，我們要應當對這些被指派 Nullable Types 的變數或者不立即被指派值的變數做型別註記
let absoluteNothing: undefined = undefined
let literallyAbsoluteNothing: null = null
// 這樣以下兩個就都會噴錯
absoluteNothing = 123
literallyAbsoluteNothing = '123'

// 如果今天想要讓某變數除了可以是 Nullable Types（可能真的就是代表空值），同時又是 —— 比如說，字串 string 這個型別。

let canBeNullableString: string

canBeNullableString = 'hello'
canBeNullableString = undefined
canBeNullableString = null

// 你會發現，給它字串，它就可以正常運作。然而再清除為 null 或 undefined 時又出現錯誤。其中的原因是：TS 已經認證該變數必須得是 string 的型態。

// 如果我們在還沒指派值之前先用變數的話，不就等同於它是 undefined 的值嗎？為何它不會在一開始就會拋出問題。

let canBeNullableString_tdz: string
let myString = canBeNullableString_tdz
canBeNullableString_tdz = 'hello'

// 在還沒帶入值之前，中間如果被呼叫的話就會出現問題
// 這跟 TDZ （Temporal Dead Zone，暫時性死區）的概念還蠻像的。
// https://stackoverflow.com/questions/33198849/what-is-the-temporal-dead-zone

// 這時候我們就需要特別使用 union
// 可以同時是string與null
let absolutelyEitherNullOrString: string | null = null
absolutelyEitherNullOrString = '123'
absolutelyEitherNullOrString = null

// 對遲滯性指派進行型別註記
// 就算 A 是非 any 型別但一開始是 undefined 的狀態，TS 仍然不會對你有什麼太大意見
// 真正有意見時，是在你指派具 T 型別的值（也就是 B）到 A 裡面前，你就對 A 做其他行為，TS 會自動跟你槓上（TDZ 的概念）
// 基本上，對 A 有註記跟沒註記 T 型別差別僅僅只是防止變數 A 被 TS 冷落（也就是被推論為 any），但也因為這樣我們才能找回 TS 對 A 變數的關注，防止我們不小心弄錯 A 的型別
type T = {
    A: string
}
let A: T
A = B as T

// 型別註記的目的
// 1.其中註記最大的好處，除了是讓開發者明確知道變數固定在哪個型別外，TS 也可以不用猜就知道要怎麼幫我們關注該變數
// 2.把 any 這個禍根給剔除
