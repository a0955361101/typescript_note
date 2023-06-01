// 介面的交集
// 定義 I1, I2, I3 三種不同的介面:
interface I1 {
  a: string;
  b: number;
}
interface I2 {
  b: number;
  c: boolean;
}
interface I3 {
  a: string;
  c: string;
}

// I1 和 I2 同時有 b 屬性且對應型別相同 => STRIKE
interface I12 extends I1, I2 {}

// I2 和 I3 同時有 c 屬性且對應型別不同 => BALL
// interface I23 extends I2, I3 {}

// I1 和 I3 同時有 a 屬性且對應型別相同 => STRIKE
interface I13 extends I1, I3 {}

// 想當然三種型別因為 I2 , I3 關係而造成衝突 => BALL
// interface I123 extends I1, I2, I3 {}

interface AccountSystem {
  email: string;
  password: string;
  subscribed: boolean;
}

interface AccountPersonalInfo {
  nickname?: string;
  birth?: Date;
  gender?: string;
}

// UserAccount 是 AccountSystem 與 AccountPersonalInfo 的組合
interface UserAccount extends AccountSystem, AccountPersonalInfo {}
