// 提款機範例
// 定義每一個使用陽春的提款機的用戶的資訊
type TUserAccount = {
  account: string;
  password: string;
  money: number;
};

// 定義陽春的提款機介面
interface ICashMachine {
  // 存錢,裡面填入要存錢的量
  deposit(amount: number): void;
  // 提領錢,裡面填入要提錢的量
  withdraw(amount: number): void;
  // 一系列的使用者帳戶
  users: TUserAccount[];
  // 登入的使用者,可為空代表還沒登入
  currentUser: TUserAccount | undefined;
  // 登入系統,必須填入帳戶與密碼
  signIn(account: string, password: string): void;
  // 登出系統
  signOut(): void;
}

// 定義陽春的提款機介面的帳戶管理系統
interface AccountSystem {
  // 一系列的使用者帳戶
  users: TUserAccount[];
  // 登入的使用者,可為空代表還沒登入
  currentUser: TUserAccount | undefined;
  // 登入系統,必須填入帳戶與密碼
  signIn(account: string, password: string): void;
  // 登出系統
  signOut(): void;
}
// 定義陽春的提款機介面的交易系統
interface TransactionSystem {
  // 存錢,裡面填入要存錢的量
  deposit(amount: number): void;
  // 領錢,裡面填入要提錢的量
  withdraw(amount: number): void;
}

// 定自陽春的提款機介面的完整系統
interface ICashMachine extends TransactionSystem, AccountSystem {}

// 實踐 ICashMachine 介面
class CashMachine implements ICashMachine {
  deposit(amount: number): void {
    throw new Error("Method not implemented.");
  }
  withdraw(amount: number): void {
    throw new Error("Method not implemented.");
  }
  signIn(account: string, password: string): void {
    throw new Error("Method not implemented.");
  }
  signOut(): void {
    throw new Error("Method not implemented.");
  }
  // 假設我們有這些使用者
  users: TUserAccount[] = [
    { account: "Maxwell", password: "123", money: 12345 },
    { account: "Martin", password: "456", money: 54321 },
    { account: "Chairman Guo", password: "789", money: 10000000 },
  ];
  currentUser: TUserAccount | undefined;

  signIn1(account: string, password: string) {
    // 因為 Array.prototype.find 是 ES6 語法,暫時先用 ES5 的方式處理
    for (let i = 0; i < this.users.length; i += 1) {
      const user = this.users[i];
      if (user.account === account && user.password === password) {
        this.currentUser = user;
        break;
      }
    }
    if (this.currentUser === undefined) {
      throw new Error("User not found!");
    }
  }
  signOut2() {
    // 清除目前的使用者
    this.currentUser = undefined;
  }

  deposit2(amount: number) {
    if (this.currentUser !== undefined) {
      this.currentUser.money += amount;
    } else {
      throw new Error("No user signed in!");
    }
  }
  withdraw2(amount: number) {
    if (this.currentUser !== undefined) {
      this.currentUser.money -= amount;
    } else {
      throw new Error("No user signed in!");
    }
  }
}

function printAccountInfo(input: TUserAccount | undefined) {
  if (input === undefined) {
    console.log("No user found!");
  } else {
    console.log(`
    Current User:${input.account}
    Money:${input.money}
    `);
  }
}

// 初始化新的提款機
const machine = new CashMachine();
console.log("Initialized");
printAccountInfo(machine.currentUser);

// 登入過後
machine.signIn("Maxwell", "123");
console.log("Signed In: ");
printAccountInfo(machine.currentUser);

// 提款 5000 過後
machine.withdraw(5000);
console.log("After Withdrawal");
printAccountInfo(machine.currentUser);

// 登出過後
machine.signOut();
console.log("Signed Out: ");
printAccountInfo(machine.currentUser);
