let numbers = [1, 2, 3, 4, 5];
let mappedNumbers = numbers.map((num) => num * 2);

// 不熟悉 ES6 Arrow Function 語法，可以將它的寫法等化為:
// let mappedNumbers = numbers.map(function(num)){retrun num * 2};

let nums = [1, 2, 3, 4, 5];
let doubledNums = [];

for (let i = 0; i < nums.length; i++) {
  const originalValue = nums[i];
  doubledNums.push(originalValue * 2);
}
