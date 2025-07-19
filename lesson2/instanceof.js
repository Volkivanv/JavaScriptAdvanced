class Animal {
    constructor(name){
        this.name = name;
    }
}


// Определение класса Dog, который наследуется от класса Animal
class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}

// Создание объектов
const animal = new Animal("Animal");
const dog = new Dog("Dog");

//Проверка с помощью instanceof
console.log(animal instanceof Animal); // Выводит true, так как animal является экземпляром класса Animal
console.log(dog instanceof Animal); // Выводит true, так как dog является экземпляром класса animal вследствии наследования

// Проверка на экземпляр родительского класса
console.log(dog instanceof Dog); //Выводит true так как dog является экземпляром класса dog

//Проверка на экземпляр родительского класса
console.log(animal instanceof Dog); // Выводит false, так dog является экземпляром класса Dog

console.log(dog instanceof Cat); //выводит ошибку так как класс Cat не существует

