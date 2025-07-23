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

let feedBackList = JSON.parse(localStorage.getItem("feedbackList")) || [];
if ((feedBackList.length == 0)||(feedBackList == 'undefined')) {
    localStorage.setItem("feedbackList", JSON.stringify(initialData));
}

const divContainer = document.querySelector(".container");
divContainer.innerHTML = "";
for (const product of feedBackList) {
    const productContainer = document.createElement("div");
    const productName = document.createElement("h2");
    productName.textContent = product.product;
    productContainer.appendChild(productName);

    for (const review of product.reviews) {
        const reviewContainer = document.createElement("div");
        const reviewId = document.createElement("h3");
        reviewId.textContent = 'Отзыв №: ' + review.id;
        const reviewText = document.createElement("p");
        reviewText.textContent = review.text;
        reviewContainer.appendChild(reviewId);
        reviewContainer.appendChild(reviewText);
        productContainer.appendChild(reviewContainer);
    }
    divContainer.appendChild(productContainer);
}
