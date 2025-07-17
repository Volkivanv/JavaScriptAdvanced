let obj = {
    animal: 'dog'
}

let obj2 = obj;
obj = null;

console.log(obj);
console.log(obj2);
// объект удалится только при удалении всех ссылок на объект