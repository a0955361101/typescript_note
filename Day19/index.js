"use strict";
// 實踐 ICashMachine 介面
class CashMachine {
    constructor() {
        // 假設我們有這些使用者
        this.users = [
            { account: "Maxwell", password: "123", money: 12345 },
            { account: "Martin", password: "456", money: 54321 },
            { account: "Chairman Guo", password: "789", money: 10000000 },
        ];
    }
    deposit(amount) {
        throw new Error("Method not implemented.");
    }
    withdraw(amount) {
        throw new Error("Method not implemented.");
    }
    signIn(account, password) {
        throw new Error("Method not implemented.");
    }
    signOut() {
        throw new Error("Method not implemented.");
    }
    signIn1(account, password) {
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
    deposit2(amount) {
        if (this.currentUser !== undefined) {
            this.currentUser.money += amount;
        }
        else {
            throw new Error("No user signed in!");
        }
    }
    withdraw2(amount) {
        if (this.currentUser !== undefined) {
            this.currentUser.money -= amount;
        }
        else {
            throw new Error("No user signed in!");
        }
    }
}
function printAccountInfo(input) {
    if (input === undefined) {
        console.log("No user found!");
    }
    else {
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
