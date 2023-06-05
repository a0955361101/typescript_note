"use strict";
// 如果是數字直接套入加法
const addition = (p1, p2) => {
    return p1 + p2;
};
// 如果是字串則轉換成數字
const additionStr = (p1, p2) => {
    return parseInt(p1, 10) + parseInt(p2, 10);
};
// const implementAddition: AddOperation = {
//   addition(p1: string, p2: string) {
//     return parseInt(p1, 10) + parseInt(p2, 10);
//   },
// };
// 缺少 addition
// const implementAddition: AddOperation = {
//   addition(p1: number | string, p2: number | string) {
//     if (typeof p1 === "number" && typeof p2 === "number") {
//       return p1 + p2;
//     } else if (typeof p1 === "string" && typeof p2 === "string") {
//       return parseInt(p1, 10) + parseInt(p2, 10);
//     }
//   },
// };
const implementAddition = {
    addition(p1, p2) {
        if (typeof p1 === "number" && typeof p2 === "number") {
            return p1 + p2;
        }
        else if (typeof p1 === "string" && typeof p2 === "string") {
            return parseInt(p1, 10) + parseInt(p2, 10);
        }
        throw new Error(`
    Parameter \`p1\` and \`p2\` should only accept both \`number\`
    type or \`string\` type
    `);
    },
};
