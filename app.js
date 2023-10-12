//Exercise 1: filterOutOdds
//ES5
// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function (num) {
//     return num % 2 === 0;
//   });
// }

//ES2015
const filterOutOdds = (...args) => args.filter((num) => num % 2 === 0);

//Exercise 2: findMin
const findMin = (...args) => args.reduce((min, val) => (val < min ? val : min));

// const findMin = (...args) => Math.min(...args);

//Exercise 3: mergeObjects
const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

//Exercise 4: doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => {
  let double = args.map((num) => {
    return num * 2;
  });
  return [...arr, ...double];
};

//Exercise 5: Slice and Dice
//1: removeRandom
const removeRandom = (items) => {
  let newItems = [...items];
  let randIdx = Math.floor(Math.random() * newItems.length);
  newItems.splice(randIdx, 1);
  return newItems;
};

//2: extend
const extend = (array1, array2) => {
  return [...array1, ...array2];
};

//3: addKeyVal
// function addKeyVal(obj, key, val) {
//   return { ...obj, [key]: val };
// }

const addKeyVal = (obj, key, val) => {
  if (!obj.hasOwnProperty([key])) {
    return { ...obj, [key]: val };
  }
};

// 4: removeKey
const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

//5: combine
const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

//6: update
// function addKeyVal(obj, key, val) {
//   return { ...obj, [key]: val };
// }

const update = (obj, key, val) => {
  if (obj.hasOwnProperty([key])) {
    return { ...obj, [key]: val };
  }
};
