// function sayHello() {
//     console.log('Hello');
// }

// console.log(sayHello.name); //Выводит имя sayHello
// console.log(window.name); //выводит имя окна браузера, пустую строку или имя окна, если оно было задано

//frames[0].name = 'Hello';

//console.log(frames[0].name); //Выводит имя фрейма, пустую строку или имя фрейма, если но было задано.

const obj = {};
console.log(obj.name); //Выводит значение undefined, так как свойство "name" не было определено для объекта

class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
}

const rect = new Rectangle(10, 5);
console.log(rect.constructor.name); //Выводит имя класса  "Rectangle" через свойство "name" конструктора объекта