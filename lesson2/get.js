

// class Automobile {
//     _horsePowers = 0; //Объеявление приватного свойства _horsePowers со значением 0, используя синтаксис приватных полей

//     set horsePowers(value){// Определение сеттера для свойства horsePowers
//         if (value < 0) throw new Error("Отрицательное количество сил"); // Проверка, что значение больше или равно 0, иначе выбрасывается исключение
//         this._horsePowers = value; //установка значения свойства

//     }

//     get horsePowers() { // Определение геттера для свойства horsePowers
//         return this._horsePowers; //Возвращает значение свойства _horsePowers
//     }

//     constructor(power){
//         this._horsePowers = power; // Установка значения свойства _horsePowers при создании объекта класса
//     }
// }

// let auto = new Automobile(100); //Создание нового объекта класса AutoMobile и передача значения 100 в конструктор

//auto.horsePowers = -10;

//auto._horsePowers = 10;

//console.log(auto.horsePowers);

// приватные свойства. Это свойства начинаются со знака # и имеют защиту на уровне языка 

class Automobile {
    #horsePowers = 0; // # означает, что свойство приватное

    set horsePowers(value){// Определение сеттера для свойства horsePowers
        if (value < 0) throw new Error("Отрицательное количество сил"); // Проверка, что значение больше или равно 0, иначе выбрасывается исключение
        this.#horsePowers = value; //установка значения свойства

    }

    get horsePowers() { // Определение геттера для свойства horsePowers
        return this.#horsePowers; //Возвращает значение свойства _horsePowers
    }

    constructor(power){
        this.#horsePowers = power; // Установка значения свойства _horsePowers при создании объекта класса
    }
}

let auto = new Automobile(100);

auto.horsePowers = 50;
console.log(auto.horsePowers);

auto.#horsepower = 10; // не могу поменять эти параметры.