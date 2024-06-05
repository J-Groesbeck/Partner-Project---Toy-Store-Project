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
},
{
    name: 'Wooden Dog',
    price: 24.99,
    image: 'product-imgs/dog1.png',
    description: `Lovingly handcrafted from natural materials, the Pull Toy Dog is a safe, durable and colorful friend for your toddler. Classic and timeless, this little wooden playmate makes the perfect addition to any little one’s toy collection. And did we mention that it drives like a dream! Height 5 2/5” (13.5 cm), 6 4/5” length (17 cm)`,
    ages: 'Toddlers'
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
            <h3 class="mb-0">${product.name} (${product.ages})</h3>
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
                                <div class="col-12 col-lg-8">
                                    <img src="${product.image}" class="w-100 test">
                                </div>
                                <div class="col-12 col-lg-4">
                                    <div class="row">
                                        <div class="col-12 text-end">
                                            <h3 class="mb-0">${product.name}<br>$${product.price.toFixed(2)}</h3>
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
    const productToAdd = productsInfo[productNumber];
    const itemIndex = cartArray.findIndex(item => item.name === productToAdd.name);
    if (itemIndex !== -1) {
        cartArray[itemIndex].count += 1;
    } else {
        productToAdd.count = 1;
        cartArray.push(productToAdd);
    }
    localStorage.setItem("cartArray", JSON.stringify(cartArray));
    displayCart();
}

function removeFromCart(cartNumber) {
    cartArray.splice(cartNumber, 1);
    localStorage.setItem("cartArray", JSON.stringify(cartArray));
    displayCart();
}

let cartContainer = document.getElementById('cart');

function openCart() {
    document.getElementById('openCartIcon').classList.toggle('d-none');
    document.getElementById('closeCartIcon').classList.toggle('d-none');
    document.getElementById('cartIcons').classList = 'cart-icon sticky-top pt-4 ps-2 cart-icon-left';
    cartContainer.classList.toggle('d-none');
    cartContainer.classList.toggle('expansion-anim');
    cartContainer.classList.toggle('retract-anim');
    displayCart();
}

function displayCart() {
    cartContainer.innerHTML = '';
    let i = 0;
    cartArray.forEach(item => {
        if (!item.count) item.count = 1;  // Ensure count is always set
        const card = document.createElement('div');
        card.classList.add('col-12', 'mb-1');

        card.innerHTML = `
        <div class="card p-1" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top">
            <div class="card-body row pb-0">
                <div class="col-12">
                   <h5 class="card-title">${item.name}</h5>
                </div>
                <div class="col-6 mb-1">
                    <label>Count:</label>
                    <select name="item-count${i}" id="itemAmount${i}" onchange="updatePrice(${i})">
                      ${[...Array(9).keys()].map(n => `<option value="${n + 1}" ${item.count === (n + 1) ? 'selected' : ''}>${n + 1}</option>`).join('')}
                    </select>
                </div>
                <div class="col-6">
                   <p id="itemPrice${i}" class="card-text">$${(item.price * item.count).toFixed(2)}</p>
                </div>
                <a onclick="removeFromCart(${i})" class="btn btn-primary mb-0">Remove from Cart</a>
            </div>
        </div>
        `;

        cartContainer.appendChild(card);
        i += 1;
    });
    const totalPriceContainer = document.createElement('div');
    totalPriceContainer.classList = 'col-12'
    totalPriceContainer.innerHTML = `<div class="row">
                                        <div class="col-6">Total: $${getTotalPrice()}</div>
                                        <div class="col-6"><a class="btn btn-primary mb-0 target="_blank">Place Order (out of stock)</a></div>
                                    </div>`
    cartContainer.appendChild(totalPriceContainer);
}

function updatePrice(itemNumber) {
    let itemAmount = document.getElementById(`itemAmount${itemNumber}`).value;
    cartArray[itemNumber].count = parseInt(itemAmount);
    document.getElementById(`itemPrice${itemNumber}`).innerHTML = `$${(cartArray[itemNumber].price * cartArray[itemNumber].count).toFixed(2)}`;
    localStorage.setItem("cartArray", JSON.stringify(cartArray));
    document.getElementById('totalPrice').innerHTML = `Total: $${getTotalPrice()}`;
}

function getTotalPrice() {
    let totalPrice = 0;
    cartArray.forEach(item => {
        totalPrice += item.price * (item.count || 1);
    });
    return totalPrice.toFixed(2);
}

function closeCart() {
    document.getElementById('openCartIcon').classList.toggle('d-none');
    document.getElementById('closeCartIcon').classList.toggle('d-none');
    document.getElementById('cartIcons').classList = 'cart-icon sticky-top pt-4 ps-1 cart-icon-right';
    cartContainer.classList.toggle('expansion-anim');
    cartContainer.classList.toggle('retract-anim');
    setTimeout(() => {
        cartContainer.classList.toggle('d-none');
    }, 1000);
}