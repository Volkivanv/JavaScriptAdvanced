// const symbol = Symbol(); // Объявление

// const dogID = Symbol('dog'); // Значение уникально, даже если мы создадим несколько символов с одинаковым описанием

// const dog1 = Symbol('dog');
// const dog2 = Symbol('dog');

// console.log(dog1);
// console.log(dog2);


// console.log(dog1 === dog2); // false

//-----------------------------------------------------------------

// const dogID = Symbol('super dog');
// // alert(dogID) //TypeError: Cannot convert a Symbol value to string
// console.log(dogID); //Symbol(dog)

// console.log(dogID.description); //dog можно посмотреть описание


// // let id = Symbol('dogID');
// let id = Symbol('id');

// let buddy = {
//     [id]: 'Жучка'
// }

// console.log(buddy[id]);

// //---------------------------------------------

// //let id = Symbol('id');
// buddy[id] = "Бобик";
// console.log(buddy[id]);

//---------------------------------------

// Проблемы, которые могут возникнуть, без использования Symbol

// let buddy = {name: 'Тузик'}; //Объявляем в нашем скрипте свойство 'id'
// buddy.id = 'Наш идентификатор';//другой скрипт хочет свой идентификатор
// buddy.id = 'их идентификатор'; // сторонняя библиотека перезаписала

// console.log(buddy.id);

// // Как решить

// let buddies = {
//     [Symbol('Жучка')]: 'Жучка',
//     [Symbol('Мурка')]: 'Мурка',
//     [Symbol('Таракашка')]: 'Таракашка',
//     elephant:'Слон',
// }

// console.log(buddies);

// let newBuddies = {};
// Object.assign(newBuddies, buddies); // Object.assign скопирует все свойства, в то числе и символьные

// buddies.cat = 'Барсик';

// console.log(newBuddies);
// console.log(buddies);


//---Symbol.for

// //читаем символ из глобального реестра и записываем его в переменную
// let id = Symbol.for("id"); // Если символа не существует он будет  создан

// // читаем его снова и записываем в другую переменную (возможно из другого места кода)

// let idAgain = Symbol.for("id");

// // проверяем: это один и тот же символ
// alert(id === idAgein);

//---Symbol.keyfor
// // получаем символ по имени
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// получаем имя по символу
console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // id