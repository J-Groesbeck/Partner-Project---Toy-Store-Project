const productsInfo = [{
    name: 'Wooden Airplane',
    price: 19.99,
    image: 'product-imgs/plane1.png',
    description: `Soar through imaginative skies with this classic wooden airplane. Handcrafted from sustainable Baltic birch wood with a safe, natural harvest finish and a spinning propeller. Measures 3.5"H x 7"L x 7"W.'`,
    ages: 'Toddlers'
},
{
    name: 'Wooden Train Set',
    price: 34.99,
    image: 'product-imgs/train1.png',
    description: `Embark on a charming journey with this beautiful handcrafted wooden train set. Engine and three interchangeable cars boast intricate details made from real beech wood. Large size (84cm L x 11cm H x 13cm W) with moving wheels and a fully ecological design.`,
    ages: '3+'
},
{
    name: 'Wooden Boat',
    price: 14.99,
    image: 'product-imgs/boat1.png',
    description: `Set sail for bathtub adventures with this adorable wooden boat. Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety. Includes two peg "lobster people." Size: 10.5"W x 3.5"H.`,
    ages: 'All Ages'
},
{
    name: 'Wooden Block Set',
    price: 99.99,
    image: 'product-imgs/block-set1.png',
    description: `Build creativity and imagination with this high-quality, 72-piece block set. Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate (13” L x 12” W x 2” H).`,
    ages: '3+'
},
{
    name: 'Wooden Car',
    price: 16.99,
    image: 'product-imgs/car1.png',
    description: `This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children.`,
    ages: 'All Ages'
}
]

function generateProductCards() {
    const productCardsContainer = document.getElementById('cardContainer')
    let i = 0
    productsInfo.forEach(product => {
        const card = document.createElement('div')
        card.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-1')

        card.innerHTML = `
        <div class="card text-center overflow-x-hidden h-100">
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
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">${product.name}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-8">
                                    <img src="${product.image}" class="w-100">
                                </div>
                                <div class="col-4">
                                    <div class="row">
                                        <div class="col-12 text-end">
                                            <h3 class="mb-0">${product.name}<br>$${product.price}</h3>
                                        </div>
                                        <div class="col-12 my-2">
                                            <button class="btn btn-primary w-100" onclick="addToCart(${i})">Add To Cart</button>
                                        </div>
                                        <div class="col-12">
                                            <h5>${product.description}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
        card.classList.add('col-12', 'mb-1')

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
    document.getElementById(`itemPrice${itemNumber}`).innerHTML = `$${cartArray[itemNumber].price * itemAmount}`
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