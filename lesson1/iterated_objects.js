// Перебор строки

const string = "Hello";
// console.log(string[2]);
// console.log(string.length);

for (let str of string) {
    console.log(str);
}

// все работает как с циклами, Это так же просто работает и с другими символами

// Мы хотим из него сделать последовательность с таким образом: for(let number of range), где на выходе получим последовательность от 1 до 17

// let range = {
//     from: 1,
//     to: 10,
// };

// 1. Вызов for..of сначала вызывает эту функцию
// range[Symbol.iterator] = function () {
//     // ...она возвращает объект итераторов:
//     // 2. Далее, for(..of..) работает только с этим итератором, запршивая у него новые значения
//     return {
//         current: this.from,
//         last: this.to,

//         // 3. next() вызывается на каждой итерации цикла for(..of..)
//         next() {
//             // 4. он должен вернуть значение в виде объекта {done:.., value:...}
//             return this.current <= this.last ? { done: false, value: this.current++ } : { done: true };
//         },
//     };
// };

// for (let number of range) {
//     console.log(number);
// }


//За один раз
// let range = {
//     from: 1,
//     to: 17,
//     [Symbol.iterator]() {
//         this.current = this.from;
//         return this;
//     },
//     next() {
//         return this.current <= this.to
//             ? { done: false, value: this.current++ }
//             : {
//                   done: true,
//               };
//     },
// };

// for (let number of range) {
//     console.log(number);
// }

let pseudo = {
    0: 'first',
    1: 'second',
    2: 'newElem',
    length: 3
}

let array = Array.from(pseudo);
console.log(array);
console.log(array.pop());
// // Даже со строкой работает

let pseudo2 = 'It`s Array Like!';
let array2 = Array.from(pseudo2);
console.log(array2);
