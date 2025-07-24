// localStorage.removeItem("feedbackList");

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

let prodFilter = null;

let feedBackList = JSON.parse(localStorage.getItem("feedbackList")) || [];
if (feedBackList.length == 0 || feedBackList == "undefined") {
    localStorage.setItem("feedbackList", JSON.stringify(initialData));
}

// Удаление отзыва по id

function deleteReviewById(reviewList, id) {
    let execList = Array.from(reviewList);
    for (const product of execList) {
        product.reviews = product.reviews.filter((rev) => rev.id !== id);
    }
    let newReviewList = [];
    for (const product of execList) {
        if (product.reviews.length > 0) {
            //         console.log(product.product);
            newReviewList.push(product);
        }
    }
    // console.log(newReviewList);
    return newReviewList;
}

const divContainer = document.querySelector(".container");

//Вывод списка

function showList(reviewList, filter = null) {
    if (filter) {
        showedList = reviewList.filter((prod) => prod.product == filter);
    } else {
        showedList = Array.from(reviewList);
    }
    divContainer.innerHTML = "";
    for (const product of showedList) {
        const productContainer = document.createElement("div");
        const productName = document.createElement("h2");

        productName.textContent = product.product;
        productName.classList.add("click_for_filter");
        productContainer.appendChild(productName);
        
        for (const review of product.reviews) {
            const reviewContainer = document.createElement("div");
            const reviewId = document.createElement("h3");
            reviewId.textContent = "Отзыв №: " + review.id;
            const reviewText = document.createElement("p");
            reviewText.textContent = review.text;
            const reviewDelete = document.createElement("button");
            reviewDelete.id = review.id;
            reviewDelete.classList.add("delete-button");
            reviewDelete.textContent = "Удалить";
            reviewContainer.appendChild(reviewId);
            reviewContainer.appendChild(reviewText);
            productContainer.appendChild(reviewContainer);
            productContainer.appendChild(reviewDelete);
        }
        divContainer.appendChild(productContainer);
    }
}

showList(feedBackList);



divContainer.addEventListener("click", function (e) {
    // body
    //Удаление отзыва
    if (e.target.id) {
        feedBackList = deleteReviewById(feedBackList, e.target.id);
        localStorage.setItem("feedbackList", JSON.stringify(feedBackList));
        console.log(e.target.id);

        showList(feedBackList, prodFilter);
    }
    //фильтрация отзывов
    if (e.target.classList.contains("click_for_filter")){
        prodFilter = e.target.textContent;

        showList(feedBackList, prodFilter);
    }

});
