const productsInfo = [{
    name: 'productname',
    price: 1.00,
    image: 'product-imgs/placeholder.png',
    description: 'productdescription',
    ages: 'productagerange'
},
{
    name: 'productname1',
    price: 0.00,
    image: 'product-imgs/placeholder.png',
    description: 'productdescription1',
    ages: 'productagerange1'
},
{
    name: 'productname2',
    price: 0.00,
    image: 'product-imgs/placeholder.png',
    description: 'productdescription2',
    ages: 'productagerange2'
},
{
    name: 'productname3',
    price: 0.00,
    image: 'product-imgs/placeholder.png',
    description: 'productdescription3',
    ages: 'productagerange3'
},
{
    name: 'productname4',
    price: 0.00,
    image: 'product-imgs/placeholder.png',
    description: 'productdescription4',
    ages: 'productagerange4'
}
]

function generateProductCards() {
    const productCardsContainer = document.getElementById('cardContainer')
    let i = 0
    productsInfo.forEach(product => {
        const card = document.createElement('div')
        card.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-1')

        card.innerHTML = `
        <div class="card text-center overflow-x-hidden">
            <div class="card-header">
            ${product.name} (${product.ages})
            </div>
            <div class="card-body">
                <img src="${product.image}" class="w-100">
            </div>
            <div class="card-footer text-body-secondary row">
                 <div class="col-6">
                    $${product.price}
                 </div>
                 <div class="col-6">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal${i}">
                        See More
                    </button>
                 </div>
            </div>
        </div>
        <div class="modal fade" id="modal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <button class="btn btn-primary" onclick="addToCart(${i})">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>`

        productCardsContainer.appendChild(card)
        i = i + 1
    });
}

if (window.location.pathname.includes('products.html')) {
    generateProductCards()
}

let cartArray = []

if (localStorage.getItem("cartArray")) {
    cartArray = JSON.parse(localStorage.getItem("cartArray"))
}

function addToCart(productNumber) {
    if (!(cartArray.includes(productsInfo[productNumber]))) {
        cartArray.push(productsInfo[productNumber])
    }
    localStorage.setItem("cartArray", JSON.stringify(cartArray))
}

function removeFromCart(cartNumber) {
    cartArray.splice(cartNumber, 1)
    localStorage.setItem("cartArray", JSON.stringify(cartArray))
    displayCart()
}

let cartContainer = document.getElementById('cart')

function displayCart() {
    cartContainer.innerHTML = ''
    let i = 0
    cartArray.forEach(item => {
        const card = document.createElement('div')
        card.classList.add('col-12','mb-1')

        card.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top">
            <div class="card-body row">
                <div class="col-12">
                   <h5 class="card-title">${item.name}</h5>
                </div>
                <div class="col-6">
                    <label for="item-count${i}">How Many:</label>
                    <select name="item-count${i}" id="itemAmount${i}" onchange="updatePrice(${i})">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                    </select>
                </div>
                <div class="col-6">
                   <p id="itemPrice${i}" class="card-text">$${item.price}</p>
                </div>
                <a onclick="removeFromCart(${i})" class="btn btn-primary">Remove from Cart</a>
            </div>
        </div>
        `

        cartContainer.appendChild(card)
        i = i + 1
    });
    const totalPrice = document.createElement('p')
    totalPrice.setAttribute("id", `totalPrice`)
    totalPrice.innerHTML = `Total: $${getTotalPrice()}`
    cartContainer.appendChild(totalPrice)
}

function updatePrice(itemNumber) {
    let itemAmount = document.getElementById(`itemAmount${itemNumber}`).value
    document.getElementById(`itemPrice${itemNumber}`).innerHTML =  `$${cartArray[itemNumber].price * itemAmount}`
    totalPrice.innerHTML = `Total: $${getTotalPrice()}` 
}

function getTotalPrice() {
    let totalPrice = 0
    let i = 0
    cartArray.forEach(item => {
        totalPrice = totalPrice + item.price * document.getElementById(`itemAmount${i}`).value
        i = i + 1
    });
    return totalPrice
}