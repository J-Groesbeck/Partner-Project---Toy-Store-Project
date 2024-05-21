const productsInfo = [{
    name: 'productname',
    price: 0.00,
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
        <div class="card text-center">
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

function addToCart(productNumber) {
    cartArray.push(productsInfo[productNumber])
}

let cartContainer = document.getElementById('cart')

function openCart() {
    cartContainer.innerHTML = ''
    cartArray.forEach(item => {
        cartContainer.innerHTML = `
        `
    });
}