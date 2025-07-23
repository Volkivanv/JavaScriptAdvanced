//Генератор для генерации последовательных чисел
function* numberGenerator () {
    // body
    let number = 1;

    while (true) {
        yield number;
        number++;
    }
}

// Создаем экземпляр генератора
const generator  = numberGenerator();

// Генерируем итератор, которй будет возвращать следующее число при каждом вызове next()
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);