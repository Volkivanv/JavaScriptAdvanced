class ListBookError extends Error {
    constructor(message) {
        super(message); // вызов конструктора родительского класса (Error) с переданным сообщением
        this.name = "ListBookError"; //Установка имени ошибки
    }
}

function checkListBooks(listOfBooks) {
    let setBooks = new Set(listOfBooks);
    if (listOfBooks.length !== setBooks.size) {
        throw new ListBookError("книги в списке повторяются");
    }
}

class Library {
    #allBooks = [];

    constructor(listOfBooks) {
        try {
            checkListBooks(listOfBooks);
            this.#allBooks = listOfBooks;
        } catch (error) {
            console.log("Ошибка", error.message);
        }
    }

    get allBooks() {
        return this.#allBooks;
    }

    add(title) {
        if (this.#allBooks.includes(title)) {
            throw new ListBookError("Такая книга уже есть");
        } else {
            this.#allBooks.push(title);
        }
    }
    removeBook(title) {
        if (!this.#allBooks.includes(title)) {
            throw new ListBookError("Такой книги нет");
        } else {
            this.#allBooks = this.#allBooks.filter(book => book !== title)
        }
    }
    hasBook(title){
        return this.#allBooks.includes(title);
    }
}

console.log("Мы здесь");

let newBooks = ["Идиот", "Война и мир", "Незнайка на луне"];

console.log(newBooks);

ourLibrary = new Library(newBooks);

console.log(ourLibrary.allBooks);

ourLibrary.add("Капитанская дочь");

//ourLibrary.add('Идиот');

console.log(ourLibrary.allBooks);

ourLibrary.removeBook("Война и мир");


console.log(ourLibrary.allBooks);

console.log(ourLibrary.hasBook('Идиот'));

console.log(ourLibrary.hasBook('Летняя жара'));