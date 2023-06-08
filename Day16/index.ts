// 1.介面可以被擴張 Interface Extension/Inheritance
// 只有介面 interface 可以被擴展 (使用 extends)
type T = number;

interface I {
  a: string;
}

type U = T & I;

// interface J extends T, I {}

// 2.介面可以被融合 Declaration Merging
// 只有介面可以被重複宣告,但重複宣告的行為 -- 最後是交集的成果
// interface I1 {
//   P1: U1;
//   P2: U2;
// }
// interface I1 {
//   P3: U3;
//   P4: U4;
//   P5: U5;
// }

// // 以上等於
// interface I1 {
//   P1: U1;
//   P2: U2;
//   P3: U3;
//   P4: U4;
//   P5: U5;
// }

// 選用屬性 Optional Properties
// 介面的宣告裡,可以使用選用屬性
interface IOptionalProp {
  message?: string;
}

// 型別化名的宣告裡,也可以使用選用屬性
type TOptionalProp = {
  message?: string;
};

// 函式型別超載 Function Overload
interface IFunctionOverload {
  createElement(name: "a"): HTMLAnchorElement;
  createElement(name: "p"): HTMLParagraphElement;
}

// 型別化名的宣告裡,也可以使用函式超載
// 然而,通常不建議在型別化名進行函式超載
type TFunctionOverload = {
  createElement(name: "a"): HTMLAnchorElement;
  createElement(name: "p"): HTMLParagraphElement;
};

// Indexable Types
// 介面宣告裡,可以使用 Indexable Type
interface IStringTypeDict {
  [prop: string]: string;
}

// 型別化名的宣告裡,也可以使用 Indexable Type
type TStringDict = {
  [prop: string]: string;
};

// 唯讀屬性 Read-only Properties
// 介面的宣告裡,可以使用唯獨屬性
interface IReadonlyProp {
  readonly message: string;
}

// 型別化名的宣告裡,也可以使用唯獨屬性
type TReadonlyProp = {
  readonly message: string;
};
