// Опциональная цепочка вызовов методов и оператор нулевого слияния
// Объект  с информацией о пользователе
const user = {
    name: 'John',
    age: 30,
    address: {
        city:'New York',
        street: '123 Main St'
    },
    contacts: {
        email: 'John@example.com',
        phone: '+1234543'
    }
};

const email = user?.contacts?.email;
console.log(email); // Выводит 'John@example.com'

//Если значение не определено или равно null или undefined, используется значение по умолчанию

const defaultValue = user?.otherValue ?? 'Default Value';
console.log(defaultValue); //Выводит 'Default Value', так как свойство 'otherValue' не существует в объекте user

// Опциональная цепочка вызовов методов и операторов нулевого слияния вместе
const streetName = user?.address?.street ?? 'Unknown';
console.log(streetName);// Выводит '123 Main St', так как свойство  'street' существует в объекте user.address