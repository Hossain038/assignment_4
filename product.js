

const products = [
  { id: 1, name: 'Product 1', price: 19.99, image: 'images/product8.jpg' },
  { id: 2, name: 'Product 2', price: 29.99, image: 'images/product9.jpg' },
  { id: 3, name: 'Product 3', price: 39.99, image: 'images/product11.jpg' }
];

// Shopping Cart
const cart = [];

// Get cart table body and total amount element
const cartTableBody = document.getElementById('cart-items');
const totalAmountElement = document.getElementById('total-amount');

// Add to Cart Button Event Listeners
const addToCartButtons = document.getElementsByClassName('add-to-cart');
    // Add to Cart Button Event Listeners
    for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', () => {
    const selectedProduct = products[i];
    addToCart(selectedProduct, 1);
    displayCartItems();
  });
}

// Add to Cart Function
function addToCart(product, quantity = 1) {
  const cartItem = cart.find(item => item.product.id === product.id);
  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({ product, quantity });
  }
}

// Display Cart Items Function
function displayCartItems() {
  cartTableBody.innerHTML = '';
  let totalAmount = 0;

  cart.forEach(item => {
    const { product, quantity } = item;
    const { name, price, image } = product;
    const total = price * quantity;
    totalAmount += total;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>
        <img src="${image}" alt="${name}" style="max-width: 50px;">
        <p>${name}</p>
      </td>
      <td>${quantity}</td>
      <td>$${price.toFixed(2)}</td>
      <td>$${total.toFixed(2)}</td>
    `;

    cartTableBody.appendChild(row);
  });

  totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;
}

// Clear Cart Button Event Listener
const clearCartButton = document.getElementById('clear-cart');
clearCartButton.addEventListener('click', () => {
  clearCart();
  displayCartItems();
});

// Clear Cart Function
function clearCart() {
  cart.length = 0;
}

// Initial Display of Cart Items
displayCartItems();

