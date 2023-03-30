"use strict";
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
let obj2 = Object.assign(Object.assign({}, obj1), { goodbye: 'Cruel World' });
// 使用 Object.assign
let obj3 = { hello: 'string' };
let obj4 = Object.assign(obj3, {
    goodbye: 'Cruel World'
});
console.log('obj4: ', obj4);
