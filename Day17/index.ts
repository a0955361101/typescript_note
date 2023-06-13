type UnionSet1 = number | string;

type UserInfo1 = {
  name: string;
  age: number;
};

type UserInfo2 = {
  hasPet: boolean;
  ownsMotorcycle: boolean;
};

type UnionSet2 = UserInfo1 | UserInfo2;

// 按照數學推理理應只有三種組合
// 1. 只有 UserInfo1
let maxwellOnlyInfo1: UnionSet2 = {
  name: "Maxwell",
  age: 20,
};

// 2. 只有 UserInfo2
let maxwellOnlyInfo2: UnionSet2 = {
  hasPet: false,
  ownsMotorcycle: true,
};

// 3.都有
let maxwellOnlyInfo3: UnionSet2 = {
  name: "Maxwell",
  age: 20,
  hasPet: false,
  ownsMotorcycle: true,
};

// 理應要錯誤的組合
// 1. UserInfo1 和 UserInfo2 皆缺屬性:保證錯
// let maxwellWithPartialInfo1: UnionSet2 = {
//   name: "Maxwell",
//   // age: 20, <-- 缺少
//   // hasPet: false, <-- 缺少
//   ownsMotorcycle: true,
// };

// 2. UserInfo1 滿足但 UserInfo2 有缺屬性
let maxwellWithPartiaLInfo2: UnionSet2 = {
  name: "Maxwell",
  age: 20,
  // hasPet: false, <-- 缺這個屬性
  ownsMotorcycle: true,
};

// 3. UserInfo2 滿足但 UserInfo1 有缺屬性
let maxwellWithPartialInfo3: UnionSet2 = {
  // name: 'Maxwell', <-- 缺這個屬性
  age: 20,
  hasPet: false,
  ownsMotorcycle: true,
};

// 第一個案例一定錯，因為既不滿足 UserInfo1 也不滿足 UserInfo2；
// 然而後續的例子，只要至少其中一個型別被判定滿足，不管其他型別有沒有完整補齊，
//TypeScript 認為無所謂

// let maxwellWithNoInfo: UnionSet2 = {}; 出錯 因為什麼都沒滿足

// Intersection
type UserInfo11 = {
  name: string;
  age: number;
};

type UserInfo22 = {
  hasPet: boolean;
  ownsMotorcycle: boolean;
};

type IntersectionSet = UserInfo11 & UserInfo22;

// 正確格式,所有屬性都必須出現
let correctInfo: IntersectionSet = {
  name: "shadow",
  age: 25,
  hasPet: false,
  ownsMotorcycle: true,
};

// 錯誤格式,屬性缺一不可
// let wrongInfo1: IntersectionSet = {
//   // name:'shadow', <--缺少一個 UserInfo1 屬性
//   age: 25,
//   hasPet: false,
//   ownsMotorcycle: true,
// };

// let wrongInfo2: IntersectionSet = {
//   name: "shadow",
//   age: 25,
//   hasPet: true,
//   // ownsMotorcycle: true, <--缺少一個 UserInfo2 屬性
// };

// 直接指派一定會錯誤
// isNumber = isUnknown;

// 經過所謂 Type Guard 縮小型別推論的範疇就有可能
// 可以直接將 unknown 型別的值只派到相對應的型別
// if(type isUnknown === 'number'){
//   isNumber = isUnknown;
// }

// interface AddOperation {
//   addition(p1: number, p2: number): number;
//   addition(p1: string, p2: string): string;
// }

// const implementAddition: AddOperation = {
//   addition(p1: number | string, p2: number | string) {
//     if (typeof p1 === "number" && typeof p2 === "number") {
//       return p1 + p2;
//     } else if (typeof p1 === "string" && typeof p2 === "string") {
//       return parseInt(p1, 10) + parseInt(p2, 10);
//     }
//   },
// };

// Type Guard 遇到物件型別的狀態
// 例如: 想要寫一個簡單的總和函式介面
interface ISummation {
  (...args: number[]): number;
  (arr: number[]): number;
}

// 使用 (...args:number[]):number 的方式

// F(1, 2, 3, 4, 5);
// 結果是 1 + 2 + 3 + 4 + 5 = 15
// F([1, 2, 3, 4, 5]);
// 結果也是 1 + 2 + 3 + 4 + 5 = 15

let F: ISummation = (p1: number | number[], ...args: number[]) => {
  if (
    // Type Guard 實踐 : 確保 p1 是數字, arr 是數字型陣列
    typeof p1 === "number" &&
    args instanceof Array
  ) {
    // 將 p1 與 arr 裡面的值加總起來
    return args.reduce((acc, cur) => acc + cur, p1);
  } else if (
    // Type Guard 實踐 : 確保 p1 是陣列
    p1 instanceof Array
  ) {
    // 因為 p1 被認為是陣列,因此加總起來
    return p1.reduce((acc, cur) => acc + cur, 0);
  }
  // 滿足 `never` 的 Case
  throw new Error(`Smoething is wrong with your input`);
};

console.log(F(1, 2, 3, 4, 5));
console.log(F([1, 2, 3, 4, 5]));
