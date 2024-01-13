//selecting required DOM elemets
let cardContainer = document.querySelector(".card-container");

//get data - Ajax call

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {
                let data = json;
                console.log(data)
                data.forEach(element => {
                    cardDisplay(element);
                });

            })


// creating card

function cardDisplay(product){
    const productCard = document.createElement("div")
    productCard.className = "card";
    cardContainer.appendChild(productCard);

    const imgContainer = document.createElement("div")
    imgContainer.className = "img-container"
    productCard.appendChild(imgContainer);

    const img = document.createElement("img")
    img.className = "img"
    imgContainer.appendChild(img);
    img.setAttribute("src", `${product.image}`)

    const detailsContainer = document.createElement("div");
    detailsContainer.className = "details-container";
    productCard.appendChild(detailsContainer);

    const pName = document.createElement("span");
    pName.classList = "pname";
    pName.textContent = `${product.title}`;
    pName.setAttribute("maxlength", "10");
    detailsContainer.appendChild(pName);

    const pPrice = document.createElement("span");
    pPrice.classList = "pprice";
    pPrice.textContent = `Rs ${product.price}`;
    detailsContainer.appendChild(pPrice);

    const addToCartBtn = document.createElement("button");
    addToCartBtn.classList = "addtocartbtn";
    addToCartBtn.innerHTML = `<span class='material-symbols-outlined'> shopping_cart</span>
    Add To Cart `
    productCard.appendChild(addToCartBtn);

}


// console.log(data[0]);