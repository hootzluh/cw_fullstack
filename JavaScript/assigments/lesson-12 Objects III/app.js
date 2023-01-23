console.log('***** Objects *****');

// ******************************

// ! Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.

// ? Example : input =
// ? {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}
// ? => output =
// ? {"#FF0000":"red","#00FF00":"green","#FFFFFF":"white"}

// const invertKeyValue = obj => {
//   const result = {};
//   const keys = Object.keys(obj);
//   const values = Object.values(obj);
//   for (let i = 0; i < keys.length; i++) {
//     result[values[i]] = keys[i];
//   }
//   return result;
// };

// console.log(
//   invertKeyValue({ red: '#FF0000', green: '#00FF00', white: '#FFFFFF' })
// );

// ******************************

// ! 2. Write a JavaScript program to get a sorted array of objects ordered by properties and orders.

// ? Example - 1 : input =
// ? const users = [{ name: 'fred', age: 48 }, { name: 'barney', age: 36 }, { name: 'fred', age: 40 }], ['name'], ['asc']
// ? => output =
// ? [{"name":"barney","age":36},{"name":"fred","age":48},{"name":"fred","age":40}]
// ? Example - 2 : input =
// ? const users = [{ name: 'fred', age: 48 }, { name: 'barney', age: 36 }, { name: 'fred', age: 40 }], ['name'], ['dec']
// ? => output =
// ? [{"name":"fred","age":48},{"name":"fred","age":40},{"name":"barney","age":36}]

// const users = [
//   { name: 'fred', age: 48 },
//   { name: 'barney', age: 36 },
//   { name: 'fred', age: 40 },
// ];

// const orderArr = (arr, filter, order) => {
//   if (order === 'asc') {
//     return arr.sort((item1, item2) => {
//       if (item1[filter].toLowerCase() > item2[filter].toLowerCase()) return 1;
//       else if (item1[filter].toLowerCase() < item2[filter].toLowerCase())
//         return -1;
//       else return 0;
//     });
//   } else {
//     return arr.sort((item1, item2) => {
//       if (item1[filter].toLowerCase() > item2[filter].toLowerCase()) return -1;
//       else if (item1[filter].toLowerCase() < item2[filter].toLowerCase())
//         return 1;
//       else return 0;
//     });
//   }
// };

// console.log(orderArr(users, 'name', 'asc'));

// ******************************

// ! 3. Write a JavaScript program to convert an array of objects to a comma-separated values string that contains only the columns specified.

// ? Example: input =
// ? [{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y']
// ? => output =
// ? x,y
// ? "100","200"
// ? "300","400"
// ? "6",""
// ? "","7"

const array = [
  { x: 100, y: 200 },
  { x: 300, y: 400, z: 500 },
  { x: 6 },
  { y: 7 },
];

const CSV = (arr, colums) => {
  const columsStr = colums.join(',');
  console.log(columsStr);
  const result = arr.map(obj => {
    console.log(obj);
    return colums.reduce((acc, key) => {
      return `${acc}"${!obj[key] ? '' : obj[key]}"`;
    }, '');
  });
  console.log(result);
  return result.join('\n');
};

console.log(CSV(array, ['x', 'y']));

// ******************************

// ! 4. Write a JavaScript program to replace the names of multiple object keys with the values provided.

// ? Example: input=
// ? {
// ? job: "Programmer",
// ?  name: "Bobo",
// ?  shoeSize: 100
// ? }, { name: 'firstName', job: 'Actor' }
// ? => output=
// ? {
// ?  Actor: "Programmer",
// ?  firstName: "Bobo",
// ?  shoeSize: 100
// ? }

// const obj1 = {
//   job: 'Programmer',
//   name: 'Bobo',
//   shoeSize: 100,
// };

// const obj2 = { name: 'firstName', job: 'Actor' };

// const keySwap = (obj, changeKeys) => {
//   const objectKeys = Object.keys(obj);
//   console.log(objectKeys);
//   const result = objectKeys.reduce((acc, key) => {
//     if (changeKeys[key]) {
//       return (acc = { ...acc, [changeKeys[key]]: obj[key] });
//     } else {
//       return (acc = { ...acc, [key]: obj[key] });
//     }
//   }, {});
//   return result;
// };

// console.log(keySwap(obj1, obj2));

// ******************************

// ! 5. Write a method that makes a compare of two objects

// ? Example: input=
// ? const data = { a: 1, b: 1 };
// ? const data2 = { a: 1, b: 1 };
// ? const data3 = { a: 1, b: 2 };

// ? isEqual(data, data2)
// ? isEqual(data, data3)
// ? => output=
// ? true
// ? false

// const data = { a: 1, b: 1 };
// const data2 = { a: 1, b: 1 };
// const data3 = { a: 1, b: 2 };
// const data4 = { a: 1, b: 1, c: 3 };
// const data5 = { a: 1, c: 1 };

// const isEqual = (obj1, obj2) => {
//   const firstObjKeys = Object.keys(obj1);
//   const secondObjKeys = Object.keys(obj2);
//   console.log(firstObjKeys, secondObjKeys);
//   if (firstObjKeys.length !== secondObjKeys.length) {
//     return false;
//   }
//   for (const i in obj1) {
//     if (obj1.hasOwnProperty(i) && obj1[i] !== obj2[i]) {
//       return false;
//     }
//   }

//   return true;
// };

// console.log(isEqual(data, data2));
// console.log(isEqual(data, data3));
// console.log(isEqual(data, data4));
// console.log(isEqual(data, data5));
