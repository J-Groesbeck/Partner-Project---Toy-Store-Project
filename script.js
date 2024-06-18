const productsInfo = [{
    name: 'Wooden Airplane',
    price: 19.99,
    image: 'product-imgs/plane1.png',
    description: `Soar through imaginative skies with this classic wooden airplane. Handcrafted from sustainable Baltic birch wood with a safe, natural harvest finish and a spinning propeller. Measures 3.5"H x 7"L x 7"W.'`,
    ages: 'Toddlers',
    rating: 4.5,
    reviews: [`☆5 - Perfect Toy for Imaginative Play!<br>My child loves this wooden airplane! It's well-made, safe, and the spinning propeller is a fun touch. The sustainable wood is a great bonus. Highly recommend!`,
        `☆4 - Beautifully Made, but a Bit Pricey<br>The quality and craftsmanship are impressive. My son enjoys it, but it's a bit pricey for its size. Still, the eco-friendly aspect makes it worth it.`, 
        `☆4.5 - A Timeless Classic<br>This wooden airplane is a timeless classic that brings so much joy to my kids. The natural finish is safe, and the spinning propeller adds fun. Durable and beautifully made, it's a great buy.`]
},
{
    name: 'Wooden Train Set',
    price: 34.99,
    image: 'product-imgs/train1.png',
    description: `Embark on a charming journey with this beautiful handcrafted wooden train set. Engine and three interchangeable cars boast intricate details made from real beech wood. Large size (84cm L x 11cm H x 13cm W) with moving wheels and a fully ecological design.`,
    ages: '3+',
    rating: 4.7,
    reviews: [`☆5 - Fantastic Quality and Design<br>This wooden train set is amazing! The beech wood craftsmanship and intricate details are impressive, and my kids love playing with it. Worth every penny for its quality and ecological design.`, 
        `☆4.5 - Beautiful and Durable<br>The wooden train set is both beautiful and durable. My kids play with it daily, and it shows no signs of wear. Slightly pricey, but the quality makes it worthwhile.`, 
        `☆4.6 - Perfect Gift for Kids<br>This train set is the perfect gift! The size is great for imaginative play, and the moving wheels are a hit. Eco-friendly and well-made, it's a fantastic addition to our toy collection.`]
},
{
    name: 'Wooden Boat',
    price: 14.99,
    image: 'product-imgs/boat1.png',
    description: `Set sail for bathtub adventures with this adorable wooden boat. Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety. Includes two peg "lobster people." Size: 10.5"W x 3.5"H.`,
    ages: 'All Ages',
    rating: 4.4,
    reviews: [`☆4.8 - Perfect for Bath Time Fun<br>This wooden boat is perfect for bath time! It floats well, is beautifully crafted from solid pine, and my kids love the cute "lobster people." Great quality for the price.`, 
        `☆3.7 - Adorable and Safe<br>The wooden boat is adorable and safe with its rounded edges. My child loves playing with it in the tub. Slightly more expensive than plastic toys, but the quality is worth it.`, 
        `☆4.7 - Great Craftsmanship<br>I love the craftsmanship of this wooden boat! It floats perfectly, and the solid Maine white pine construction is impressive. A wonderful and durable toy for kids.`]
},
{
    name: 'Wooden Block Set',
    price: 99.99,
    image: 'product-imgs/block-set1.png',
    description: `Build creativity and imagination with this high-quality, 72-piece block set. Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate (13” L x 12” W x 2” H).`,
    ages: '3+',
    rating: 5,
    reviews: [`☆5 - Amazing Quality and Value<br>This wooden block set is amazing! The hardwood blocks are smooth and durable, and the storage crate is a nice touch. Worth every penny for hours of creative play.`, 
        `☆5 - Perfect for Imaginative Play<br>The quality of this block set is outstanding. My kids love building with it, and the smooth finish ensures safe play. Highly recommend for fostering creativity!`, 
        `☆5 - Best Block Set Ever<br>This is the best block set we've ever owned. The 72 pieces provide endless building possibilities, and the storage crate keeps everything organized. A must-have for any playroom!`]
},
{
    name: 'Wooden Car',
    price: 16.99,
    image: 'product-imgs/car1.png',
    description: `This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children.`,
    ages: 'All Ages',
    rating: 4.1,
    reviews: [`☆5 - Beautiful Craftsmanship<br>The Wooden Car is beautifully crafted and feels very durable. The mix of hardwoods gives it a unique look. Perfect for older kids due to the small parts.`, 
        `☆4 - Great Quality, but Be Cautious<br>The quality and finish of this car are excellent. However, parents should be cautious with younger children due to potential choking hazards. Overall, it's a wonderful toy for imaginative play.`, 
        `☆3.3 - Lovely but Pricey<br>This wooden car is lovely and well-made, but I find it a bit pricey for its size. Also, the small parts make it unsuitable for toddlers. Still, it's a charming piece for older kids. We found the SuperCar Toy much better!`]
},
{
    name: 'Wooden Dog',
    price: 24.99,
    image: 'product-imgs/dog1.png',
    description: `Lovingly handcrafted from natural materials, the Pull Toy Dog is a safe, durable and colorful friend for your toddler. Classic and timeless, this little wooden playmate makes the perfect addition to any little one’s toy collection. And did we mention that it drives like a dream! Height 5 2/5” (13.5 cm), 6 4/5” length (17 cm)`,
    ages: 'Toddlers',
    rating: 4.4,
    reviews: [`☆5 - Perfect Toddler Toy<br>This Wooden Dog is perfect for my toddler! It's durable, colorful, and safe. My child loves pulling it around the house.`, 
        `☆4 - Great Quality, Fun to Play With<br>The Wooden Dog is well-made and drives smoothly. My toddler enjoys it, but I wish it were a bit larger for the price. Still, a great addition to our toy collection.`, 
        `☆4.2 - Adorable and Durable<br>This pull toy is adorable and very durable. My little one loves it, and it’s holding up well. A bit pricey, but the quality makes it worth it.`]
}
]

function generateProductCards() {
    const productCardsContainer = document.getElementById('cardContainer')
    let i = 0
    productsInfo.forEach(product => {
        const card = document.createElement('div')
        card.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-4')

        card.innerHTML = `
        <div class="card">
            <div class="card-inner" style="--clr:#fff;">
                <div class="box">
                    <div class="imgBox  ">
                        <img src="${product.image}">
                    </div>
                    <div class="icon">
                        <a type="button" data-bs-toggle="modal" data-bs-target="#modal${i}" class="iconBox"> <span class="material-symbols-outlined">
                        arrow_outward
                        </span></a>
                    </div>
                </div>
            </div>
            <div class="content pb-0">
                <h3>${product.name}<br>☆${product.rating}</h3>
                <p class="mb-1">
                    $${product.price}   <button class="btn btn-primary float-end" onclick="addToCart(${i})">Add To Cart</button> 
                </p>
            </div>
        </div>
        <div class="modal fade" id="modal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">${product.name}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></bSutton>
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
                                            <h5>Age Range: ${product.ages}. ${product.description}</h5>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="col-12"><h2>Reviews</h2></div>
                                <div class="col-12"><h6>${product.reviews[0]}</h6></div>
                                <div class="col-12"><h6>${product.reviews[1]}</h6></div>
                                <div class="col-12"><h6>${product.reviews[2]}</h6></div>
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

let cartArray = [];

if (localStorage.getItem("cartArray")) {
    cartArray = JSON.parse(localStorage.getItem("cartArray"));
}

function addToCart(productNumber) {
    const productToAdd = productsInfo[productNumber];
    const itemIndex = cartArray.findIndex(item => item.name === productToAdd.name);
    if (itemIndex !== -1) {
        if (cartArray[itemIndex].count < 9) {
            cartArray[itemIndex].count += 1;
        }
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
    totalPriceContainer.classList = 'col-12';
    totalPriceContainer.innerHTML = `<div class="row">
                                        <div class="col-6"><h4>Total: $${getTotalPrice()}</h4></div>
                                        <div class="col-6"><a class="btn btn-secondary mb-0" target="_blank">Place Order (out of stock)</a></div>
                                    </div>`;
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
