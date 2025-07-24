let feedBackList = JSON.parse(localStorage.getItem("feedbackList")) || [];
let maxId = 0;
for (const product of feedBackList) {
    for (const review of product.reviews) {
        if (review.id > maxId) {
            maxId = review.id;
        }
    }
}
console.log(maxId);

const submit = document.querySelector(".submit");
const productName = document.querySelector(".product");
const productReview = document.querySelector(".feedback");

submit.addEventListener("click", function (e) {
    // body
    let newId = ++maxId;
    console.log(newId);
    let productFound = false;
    const newReview = {
        id: newId.toString(),
        text: productReview.value,
    };

    for (const product of feedBackList) {
        if (product.product == productName.value) {
            console.log('мы нашли продукт');
            productFound = true;
            product.reviews.push(newReview);
            break;
        }
    }

    if (!productFound) {
        console.log('мы добавляем новый продукт');
        const newProduct = {
            product: productName.value,
            reviews: [
                {
                    id: newId.toString(),
                    text: productReview.value,
                },
            ],
        };
        feedBackList.push(newProduct);
    }

    console.log(feedBackList);

    localStorage.setItem("feedbackList", JSON.stringify(feedBackList));
});


