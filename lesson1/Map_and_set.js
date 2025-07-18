// let map = new Map();

// map.set("1", "str1");   // строка в качестве ключа
// map.set(1, "num1");     // цифра как ключ
// map.set(true, "bool1"); // булево значение как ключ

// console.log(map);

// // помните, обычный объект Object приводит ключи к строкам?
// // Map сохраняет тип ключей, так что в этом случае сохраняется 2 разных значения:
// console.log(map.get(1));
// console.log(map.get("1"));
// console.log(map.size);

//get set

// let map = new Map();
// map.set("1", "We")
// .set(1, "likes")
// .set(true, "JS");

// console.log(map);

// //перебор коллекции
// let recipeMap = new Map([
//     ["огурец", 500],
//     ["помидор", 350],
//     ["лук", 50]
// ]);
// console.log(recipeMap);

// //перебор по ключам
// for (let vegetable of recipeMap.keys()){
//     console.log(vegetable);
// }
// //перебор по значениям
// for (let amount of recipeMap.values()){
//     console.log(amount);
// }

// //перебор в формате [ключ, значение]
// for (let entry of recipeMap){
//     console.log(entry);
// }

// recipeMap.forEach((value, key, map) => {
//     console.log(`${key}: ${value}`);
// });

//работа с объектами

// Object.entries поможет создать Map
// let map = new Map(Object.entries(obj));
// Object fromEntries поможет создать oбъект из Map:
// let obj = Object.fromEntries(map);

//------Set--
// let buddies = [
//     'Жучка',
//     'Тузик',
//     'Булька',
//     'Тузик',
//     'Валера',
//     'Манька',
// ];

// let uniqueBuddies = new Set(buddies);

// console.log(uniqueBuddies);

//перевести в массив
let buddies = [
    'Жучка',
    'Тузик',
    'Булька',
    'Тузик',
    'Валера',
    'Манька',
];

let uniqueBuddies = new Set(buddies)

let arr = Array.from(uniqueBuddies);

console.log(arr);