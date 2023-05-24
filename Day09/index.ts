type PersonInfo = {
  name: string;
  age: number;
  hasPet: boolean;
};
// 上面的 PersonInfo 型別，若某變數被積極註記過後，該變數必須完全符合的條件有以下：

// 必須有 name 屬性，對應型別為 string
// 必須有 age 屬性，對應型別為 number
// 必須有 hasPet 屬性，對應型別為 boolean

enum Gender {
  Male,
  Female,
  Other,
}

type AccountInfo = {
  account: string;
  password: string;
  nickname: string | undefined;
  birth: Date | undefined;
  gender: Gender | undefined;
  subscribed: boolean;
};

// let accountMaxwell: AccountInfo = {
//   account: "nordic.wyvern",
//   password: "<hashed-password>",
//   subscribed: false,
// }; // => TS 報錯缺少屬性 nickname / birth / gender

type SomeoneUnknown = {
  knows: undefined;
  identity: null;
};

// let anotherSomeone: SomeoneUnknown = {}; // => TS 報錯缺少 knows / identity 屬性

// 重點 1. undefined 作為物件屬性的型別
// 若將 undefined 作為物件某些屬性的型別，
// 儘管 undefined 在原生 JS 的意味就是可以放置該屬性為空值，
// 甚至是不去定義的狀態。但在 TypeScript 的世界裡：
// undefined 這種原始型別代表必須存取名為 undefined 這種值，並不是完全省略定義它！

enum Gender2 {
  Male,
  Female,
  Other,
}

type AccountInfo2 = {
  account: string;
  password: string;
  nickname?: string;
  birth?: Date;
  gender?: Gender;
  subscribed: boolean;
};

let accountMaxwell: AccountInfo2 = {
  account: "mordic.wyvern",
  password: "<hashed-password>",
  subscribed: false,
}; // ok
// 可以藉由滑鼠滑動到型別化名上，得知其化名背後代表的型別結構

type AccountSystem = {
  account: string;
  password: string;
  subscribed: boolean;
};

type AccountPersonalInfo = {
  nickname?: string;
  birth?: Date;
  gender?: Gender;
};

// 使用複合型別的 Intersection
type PersonalAccount = AccountSystem & AccountPersonalInfo;

let accountMaxwell2: PersonalAccount = {
  account: "nordic.wyvern",
  password: "<hashed-password>",
  birth: new Date(2000, 1, 2),
  subscribed: false,
};
