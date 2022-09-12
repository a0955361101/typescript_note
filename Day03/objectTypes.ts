// 滑鼠停留在info上，TS會告訴你name:string age:number hasPet:boolean
let info = {
    name: 'Maxwell',
    age: 20,
    hasPet: false,
}
// 結果就算是 Nullable Type，結果得到應該被推論出來的結果，而非 any
let someone = {
    knows: undefined,
    identity: null,
}
// 代入的值與推論的型別相同，PASS
info.name = 'Martin'
info.age = 24
info.hasPet = true

someone.knows = undefined
someone.identity = null
// 型別不相同，錯誤
info.name = false
info.age = null
info.hasPet = 'Doggie with Mustache!'

someone.knows = 'Nothing'
someone.identity = 'John Snow'

// 如果格式正確會直接複寫
info = {
    name: 'Martin',
    age: 24,
    hasPet: true,
}
// 格式錯誤 - 少一個鍵
info = {
    name: 'Martin',
    age: 24,
}
// 格式錯誤 - 多了一個鍵
someone = {
    knows: undefined,
    identity: null,
    loves: 'Ygritte',
}

// 結論 - 只要格式正確，TypeScript 都會給你通過。
// 少一鍵或多一鍵也不行，因此我們可以間接假設：如果直接對物件新增某屬性，就會被 TypeScript 警告。

// 新增不明的值也會引起TS關注
info.job = 'Engineer'

// 刪除屬性
// 有BUG https://github.com/Microsoft/TypeScript/issues/13783
delete info.hasPet
console.log(info)
// 替代性寫法
info.age = undefined

// 1. JS物件的型別會按照物件本身的格式被推論出來
// 2. 可以對物件做出的行為:
// 對物件裡的屬性覆寫值，其值的型別與該屬性對應的型別相同
// 對物件整體覆寫，其覆寫的物件格式必須完全相同

// 3. 常見會被 TS 警告的情形有以下:
// 對物件裡的屬性插入或覆寫錯誤的型別值
// 覆寫整個物件時的格式錯誤（少一鍵 / 多一鍵 / 沒多沒少鍵，但至少其中一鍵對應值之型別錯誤）
// 隨意新增原先不存在該物件的屬性

// 4. 物件的屬性若直接代入 Nullable Type，則不會被視為 any 型別，而是等同於該 Nullable Type 本身的值（undefined 型別的值就是 undefined；null 型別的值就是 null）

// 5. delete 目前在 TS 就算被使用在刪除物件屬性上，TS 依舊不會警告你 （參見這個 Issue）（這個行為可能隨時隨地會被更改掉，不過不知道是什麼時候）

// 物件包物件
let nestedObject = {
    prop: 'Hello',
    child: {
        prop1: 123,
        poop2: false,
    },
}

// 物件被展開到另一個物件 ( ES7 Rest-Spread Operator )
let obj1 = { hello: 'World' }
let obj2 = { ...obj1, goodbye: 'Cruel World' }

// 使用Object.assign
// 簡單來說以後不要隨隨便便用 Object.assign 找自己麻煩，建議用前一個範例的 Rest-Spread Operator 作為替代方案會是可以預期的結果
let obj3 = { hello: 'Another World' }
let obj4 = Object.assign(obj3, {
    goodbye: 'Cruel World',
})

// object 型別註記
let justAnObject: object = { hello: 'World' }
// 我們認為可能正確的情況 - 錯誤
justAnObject.hello = 'Max'
// 測試情況一: 覆寫錯誤型別的值 - 錯誤
justAnObject.hello = null
// 測試情況二: 完全覆寫錯誤格式 - PASS
justAnObject = { goodbye: 'Cruel World' }
// 測試情況三: 無緣無故亂加Key - 錯誤
justAnObject.newProp = 123

// 結論 -  只有完全覆寫是可以被 TypeScript 接受的！
// 不能做細部的微調，只能整個取代

// 既然允許物件全部被覆寫的話，在 JS 裡：Array 或 Function 也是 JS 物件的一種表示方式啊，是不是就代表 Array / Function 也可以覆寫在 object 型別下呢？

// 以原始型態覆寫 (預期會出錯，畢竟不是物件) - 錯誤
justAnObject = 123
// 以陣列覆寫 - PASS
justAnObject = [1, '2', 3, '4', 5, true, { hello: 'world' }]
// 以函數來覆寫 - PASS
justAnObject = function () {
    console.log('Oh my god!?')
}
// 以物件來覆寫 - PASS
justAnObject = new Object()
// 以看起來是原始型態的東西但是用創建物件的方式覆寫 - PASS
justAnObject = new String('The prophecy is true... (Am I a cat!?)')
justAnObject = new Number(42)
// 直接用類別名稱覆寫 - PASS
justAnObject = Object
justAnObject = Array

// 除了原始型別不是物件外，其餘的都可以

// 狹義物件的定義：僅限於 JSON 格式的物件（典型的 {} 這種東西的寫法）
// 廣義物件的定義：包含 JSON 格式的物件、陣列、函式、類別、類別創建出之物件

// * 這邊發現 TS 會自動檢查整個專案中有沒有同名的全域變數
// let A: object
let B: object
// 假設B為某個被註記成object型別，則:
// 1. B可以被任何廣義物件覆寫
// 2. B一但被代入任何廣義物件，我們只能進行全面覆寫，不能進行微調動作，包含:新增屬性、改變屬性的值
// 3. B一但被代入任何廣義物件，全面覆寫的格式不限定，只要屬於廣義物件都可以

// Hypothesis：狹義物件的完整性
// 泛指狹義物件在被 TypeScript 推論的狀態下，屬性不能被任意新增或更改成其他型別，我們能夠做的事情只有：
// 1. 全面覆寫，狹義物件的屬性對照型別格式也要完全對位
// 2. 更改狹義物件本身就擁有屬性對應的值，其中：要帶入的值的型態必須對應到該屬性的型態
// 我們稱這樣的行為為「保持狹義物件的完整性」。

// 試試看把狹義物件換成廣義物件會發生什麼事情
let arrayObject = [1, 2, 3, 4, 5]
let functionObject = function () {
    console.log('Again!?')
}
let objectObject = new Promise((res) => res(123))
let primitiveObject = new String('What does the fox say? Ding!')
let classItself = Object
// 根據物件完整性的理論推測:以下應該會被TS警告
arrayObject.customProp = 123
functionObject.customProp = 456
objectObject.customProp = 'Huh?'
primitiveObject.customProp = 'Bird saya: Chuc'
classItself.customProp = 3.14
// 由於陣列裡面全都是數字，因此型別為number
// 這裡不會出現警告
arrayObject.pop = function () {
    return 123
}
// 以下會出警告
arrayObject.pop = function () {
    console.log('Returns nothing!')
}
arrayObject.pop = function () {
    return 'string'
}

// 廣義物件完整性定律
// 1. 全面覆寫，廣義物件的屬性對照型別格式也要完全對位
// 2. 更改廣義物件本身就擁有屬性對應的值，其中：要帶入的值的型態必須對應到該屬性的型態
// 我們稱這樣的行為為「保持廣義物件的完整性」。
// 總結狹義物件、廣義物件檢查方式相同
