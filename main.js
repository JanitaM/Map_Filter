let arr = [1, 2, 3, 4, 5];

const addTwo = x => x + 2;
const isEven = x => x % 2 === 0;

// Map
const myMap = (arr, fn) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return newArr;
}
console.log(`myMap`, myMap(arr, addTwo));

// Filter
const myFilter = (arr, fn) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(`myFilter`, myFilter(arr, isEven));