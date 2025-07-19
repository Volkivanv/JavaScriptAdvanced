// try {
//     undefined =1;
// } catch (error) {
//     console.log('Что-то произошло');
// } finally {
//     console.log('Отличный результат');
// }

// Пример: Работа с делением чисел

// function divideNumbers(a,b){
//     try {
//         const result = a / b; //Попытка выполнить деление
//         if (isNaN(result)) {
//             throw new Error('Результат не является числом');
//         }
//         console.log('Результат деления:', result);
//     } catch (error) {
//         console.log('Ошибка деления деления:', 0);
//     } finally {
//         console.log('Операция деления завершена');
        
//     }
// }

// divideNumbers(10, 2);
// divideNumbers("asdfas", "dsf");


// Пользовательские ошибки
// Создание пользовательской ошибки

class CustomError extends Error {
    constructor(message) {
            super(message); // вызов конструктора родительского класса (Error) с переданным сообщением
            this.name = 'CustomError'; //Установка имени ошибки
    }
}

function validateNumber(value) {
    if (typeof value !== 'number'){
        throw new CustomError('Значение должно быть числом'); //Выбрасывание пользовательской ошибки с сообщением
    }
    console.log('валидация успешна');
}

try {
    validateNumber('42'); // Проверка на число с передачей строки вместо числа
} catch (error) {
    if (error instanceof CustomError) {
        console.error('Ошибка', error.message); // Вывод сообщения об ошибке
        console.log('Тип ошибки:', error.name); // Вывод имени ошибки
    } else {
        console.error('Произошла ошибка', error); // ВЫвод сообщения об ошибке по умолчанию
    }
    
}