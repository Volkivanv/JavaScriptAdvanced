let chefs = new Map();
chefs.set("Viktor", "Pizza").set("Olga", "Sushi").set("Dmitry", "dessert");

chefs.forEach((value, key, map) => {
    console.log(`${key}: ${value}`);
});

let dishes = new Map();
dishes
    .set("Margarita", "Pizza")
    .set("Pepperoni", "Pizza")
    .set("Philadelphia", "Sushi")
    .set("California", "Sushi")
    .set("Tiramisu", "dessert")
    .set("cheesecake", "dessert");

dishes.forEach((value, key, map) => {
    console.log(`${key}: ${value}`);
});

let orders = new Map();
orders.set("Alexey", ["Margarita", "Tiramisu"]).set("Maria", ["California", "Margarita"]).set("Irina", ["cheesecake"]);

orders.forEach((value, key, map) => {
    console.log(`${key}: ${value}`);
});

//Записывать новый заказ или добавляем к старому
function newOrder(clientName, dish) {
    if (orders.has(clientName)) {
        orders.set(clientName, [orders.get(clientName), dish]);
    } else {
        orders.set(clientName, [dish]);
    }
}

console.log("После добавления");

newOrder("Irina", "Tiramisu");

//просматриваем заказы
orders.forEach((value, key, map) => {
    console.log(`${key}: ${value}`);
});


// Функция, чтобы отслеживать какой повар, какое блюдо готовит
function whatChefMake(chief) {
    let dishCook = [];
    orders.forEach((orderedDishes, client, map) => {
        for (let dish of orderedDishes) {
            if (chefs.get(chief) === dishes.get(dish)) {
                dishCook.push(`${dish} for ${client}`);
            }
        }
    });
    if (dishCook.length > 0) {
        console.log(dishCook);
    } else {
        console.log('ничего не готовит');
    }
}

whatChefMake('Viktor');