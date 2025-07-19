// Работа с window
// console.log(window);

//const newWindow = window.open('https://www.example.com', '_blank');
//открывает новое окно в бразуере

// window.resizeTo(800, 600);//Изменяет размер окна на 800х600 пикселей
//  window.location.href = 'https://www.example.com';// Перенаправляет на другую страницу
// const windowWidth = window.innerWidth;//Получает ширину окна
// console.log(windowWidth);
// Работа с window.window
// const isWindowOpen = window.innerWidth; //Получает ширину окна

// const isWindowOpen = window.window.open('https//www.example.com'); // Проверяет открыто ли окно
//  const windowHeight = window.window.innerHeight; //получает высоту окна
//  console.log(windowHeight);

// // Работа с self
// const newWindowSelf = self.open('https://www.example.com', '_blank); // открывает новое окно браузера с использованием self
// self.close(); // Закрывает текущее окно с использованием self\
// self.resizeTo(800, 600);// Изменяет размер окна на 800x600 пикселей с использованием self
// self.location.href = 'https://www.example.com'; // Перенаправляет на другую страницу с использованием self
// Работа с frames
// const frame = frame[0]; //Получает ссылку на фрейм по индексу
// // frames[0].location.href = 'https://www.example.com'; //Перенаправляет на другую страницу во фрейме
// const frameCount = frames.length; // получает количество фреймов на странице
// const parentWindow = window.parent; // Получает доступ к родительскому окну из фрейм

// Работа с globalThis
// const globalObject = globalThis; // Получает глобальный объект
// globalThis.newVariable = 'Hello, world!'; // Определяет новую глобальную переменную
// const gloabalVariable = globalThis.window === globalThis.self ? 'Window' : 'Worker'; 
//Получает доступ к глобальным переменным из разных сред исполнения

// // var
// var glob = 5
// // function
// function increment(val) {
//     return val +1;
// }

// console.log(window.glob);
// console.log(window.increment(2));

//alert
//console.log(alert() === window.alert());
// alert('Можно так');
// window.alert('А можно и так');

// const let
const local = 5;
let localFunc = () =>'localFunc'; //localFunc
console.log(local); //5
console.log(localFunc());
console.log(window.local);//undefined
console.log(window.localFunc); //undefined

//Из прошлой части
console.log(window.Symbol.for);// f for() { [native code] }
console.log(window.Symbol.iterator); //Symbol(Symbol.iterator)
console.log(window.Array.from);//ƒ from() { [native code] }