// 如果是數字直接套入加法
const addition = (p1: number, p2: number) => {
  return p1 + p2;
};

// 如果是字串則轉換成數字
const additionStr = (p1: string, p2: string) => {
  return parseInt(p1, 10) + parseInt(p2, 10);
};

interface AddOperation {
  addition(p1: number, p2: number): number;
  addition(p1: string, p2: string): number;
}

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

const implementAddition: AddOperation = {
  addition(p1: number | string, p2: number | string) {
    if (typeof p1 === "number" && typeof p2 === "number") {
      return p1 + p2;
    } else if (typeof p1 === "string" && typeof p2 === "string") {
      return parseInt(p1, 10) + parseInt(p2, 10);
    }

    throw new Error(`
    Parameter \`p1\` and \`p2\` should only accept both \`number\`
    type or \`string\` type
    `);
  },
};

// 1.參數與回傳型別一模一樣
interface AddOperation1 {
  add(p1: number, p2: number): number;
  add(p1: number, p2: number): number;
}

// 2.回傳型別不同但是參數相同
interface AddOperation2 {
  add(p1: number, p2: number): number;
  add(p1: number, p2: number): string;
}

// 3.參數數量不同
interface AddOperation3 {
  add(p1: number): number;
  add(p1: number, p2: number): number;
}
