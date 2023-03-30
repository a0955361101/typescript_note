let info = {
    name: 'shadow',
    age: 20,
    hasPet: false,
};
// name => string
// age => number
// hasPet => boolean

let someone = {
    knows: undefined,
    identity: null,
};
// knows => undefined
// identity => null

// 第一情況：屬性值被錯誤的型別插入/覆寫干擾
// 先確認屬性是否能代入值，其值對應正確的型別 => OK
info.name = 'Martin';
info.age = 24;
info.hasPet = true;

someone.knows = undefined;
someone.identity = null;

// 確認屬性被錯誤型別的值干擾 => 報錯
// info.name = false;
// info.age = null;
// info.hasPet = 'string';

// someone.knows = 'string';
// someone.identity = 'string';

// 第二情況：物件分別被正確或者是錯誤的物件格式整體複寫
// 格式正確
info = {
    name: 'string',
    age: 21,
    hasPet: true,
};

someone = {
    knows: undefined,
    identity: null,
};

// 格式錯誤 - 少一個鍵 => 報錯
// info = {
//     name: 'test',
//     age: 22,
// };

// 格式錯誤 - 多一個鍵 => 報錯
// someone = {
//     knows: undefined,
//     identity: null,
//     loves: 's'
// };

// 只要格式正確，TypeScript 都會給你通過
// 因此我們可以間接假設：如果直接對物件新增某屬性，就會被 TypeScript 警告

// 第三情況：直接對物件新增值
// 新增屬性 => 報錯
// info.job = 'string';

// 刪除屬性
// delete info.age;
// console.log(info);

// 替代性寫法 => 報錯
// info.age = undefined;

// 基礎物件的型別推論機制
// 1. JS 物件的型別會按照物件本身的格式被推論出來
// 2. 以對物件做出的行為:
//  (1) 對物件裡的屬性覆寫值，其值的型別與該屬性對應的型別相同
//  (2) 對物件整體覆寫，其覆寫的物件格式必須完全相同
// 3. 常見會被 TS 警告的情形有以下：
//  (1) 對物件裡的屬性插入或覆寫錯誤的型別值
//  (2) 覆寫整個物件時的格式錯誤（少一鍵 / 多一鍵 / 沒多沒少鍵，但至少其中一鍵對應值之型別錯誤）
//  (3) 隨意新增原先不存在該物件的屬性
// 4. 物件的屬性若直接代入 Nullable Type，則不會被視為 any 型別，而是等同於該 Nullable Type 本身的值（undefined 型別的值就是 undefined；null 型別的值就是 null）

// 物件包物件
let nestedObject = {
    prop: 'Hello',
    child: {
        prop1: 123,
        prop2: false,
    }
};

// 物件被展開到另一個物件（須具備 ES7 Rest-Spread Operator 知識）
let obj1 = { hello: 'World' };
let obj2 = { ...obj1, goodbye: 'Cruel World' };

// 使用 Object.assign
let obj3 = { hello: 'string' };
let obj4 = Object.assign(obj3, {
    goodbye: 'Cruel World'
});


// 使用 object 型別註記
let justAnObject: object = { hello: 'World' };

// 可能正確的情況 => 報錯
// justAnObject.hello = 'string';

// 測試情況一 : 覆寫錯誤型別的值 => 報錯
// justAnObject.hello = null;

// 測試情況二 : 完全覆寫錯誤格式 => OK
justAnObject = { goddbye: 'Cruel World' };

// 測試情況三 : 無緣無故亂加 Key => 報錯
// justAnObject.newProp = 123;

// object 型別指的是任何 JS 物件（儘管格式不同）都可以被套入，但是不允許對該物件做細部微調（連覆寫某型別的值，其型別跟物件本身擁有屬性對應的型別相同，將那個值覆寫進去也不行！），要覆寫就得全部覆寫！

// 以原始型態覆寫 => 報錯
// justAnObject = 123

// 以陣列覆寫 => OK
justAnObject = [1, 2, 3, 4, 5, 6];

// 以函數覆寫 => OK
justAnObject = function () {
    console.log('string');
};

// 以物件來覆寫 => OK
justAnObject = new Object();

// 以看起來是原始型態的東西但是用創建物件的方式覆寫 => OK
justAnObject = new String('string');
justAnObject = new Number(11);

// 直接用類別名稱覆寫 => OK
justAnObject = Object;
justAnObject = Array;

// 定義一系列隸屬廣義物件讓 TS 來推論
// 狹義物件的定義：僅限於 JSON 格式的物件（典型的 {} 這種東西的寫法）
// 廣義物件的定義：包含 JSON 格式的物件、陣列、函式、類別、類別創建出之物件

let arrayObject = [1, 2, 3, 4, 5];
let functionObject = () => console.log('strinig');
let objectObject = new Promise((res) => res(123));
let primitiveObject = new String('string');
let classItself = Object;

// 根據物件完整性的理論推測 : 以下應該要被 TS 警告

// arrayObject.customProp = 123; => 報錯
// functionObject.customProp = 456; => 報錯
// objectObject.customProp = 'string'; => 報錯
// primitiveObject.customProp = 'string'; => 報錯
// classItself.customProp = 3.14; => 報錯

// 根據物件完整性理論推測 : 以下應該不會怎麼樣，只是被我們惡意竄改
// 注意，值的型別要跟對應到該屬性接受的型別
// 函式的型別組成包含 input 對應 output ， 姑且舉個例子
// Array.prototype.pop 方法沒有任何 input ，但 output 可能是任意值，但由於陣列的特性，
// 我們的陣列在 `arrayObject` 裡面全部都是數字，因此型別為 `number[]` ，於是乎 pop 方法
// 的函式型別理應來說是 input 為空， output 為 number : () => number
// 因此我們如果將 pop 覆寫為以下方式，則不會出現警告
arrayObject.pop = () => 123;

// 如果你改錯成其他型別一樣，譬如在這個案例裡 Return 為空或者是非 `number` 型別，
// 則會被 TS 嫌棄，因為一樣是在破壞物件的完整性，以下這兩種就是 :
// arrayObject.pop = () => console.log('string'); => 報錯
// arrayObject.pop = () => 'string'; => 報錯

// 廣義物件完整性定律
// 能夠做的事情只有：
// 1.全面覆寫，廣義物件的屬性對照型別格式也要完全對位
// 2.更改廣義物件本身就擁有屬性對應的值，其中：要帶入的值的型態必須對應到該屬性的型態