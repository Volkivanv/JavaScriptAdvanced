class TextError extends Error {
    constructor(message) {
        super(message); // вызов конструктора родительского класса (Error) с переданным сообщением
        this.name = "TextError"; //Установка имени ошибки
    }
}

const createCounter = () => {
  let counter = 0;
  return () => {
    return ++counter;
  };
};

class FeedBack {
    #text ='';
    #id;
    constructor(text, id) {
        try {
            if (text.length < 5) {
                throw new TextError('Отзыв слишком короткий');
            }
            if (text.length > 500) {
                throw new TextError('Отзыв слишком длинный');
            }
            this.#id = id;
            this.#text = text;
        } catch (error) {
            console.error("Ошибка", error.message);
        }

    }
    
        get text(){
            return this.#text;
        }
        get id(){
            return this.#id;
        }
}


const container = document.querySelector('.container');
console.log(container);

const form= document.querySelector('.form');

counter = createCounter(0);

form.addEventListener('submit', function(event){

     ourWindow = document.querySelector('.form_window');
     event.preventDefault();

     feedBack = new FeedBack(ourWindow.value, counter());
     
     divFeedBack = document.createElement('div');
     newH3feedBack = document.createElement('h3');
     newH3feedBack.textContent = feedBack.text;
     newH2feedBack = document.createElement('h2');
     newH2feedBack.textContent = (`Отзыв номер: ${feedBack.id}`);

     divFeedBack.appendChild(newH2feedBack);
     divFeedBack.appendChild(newH3feedBack);

     container.appendChild(divFeedBack);
     console.log(feedBack.text);
});