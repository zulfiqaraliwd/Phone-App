const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
const cartContent = document.querySelector("#cart-content");

function renderCart() {
  cartContent.innerHTML = ""; // Clear existing content
  cartData.forEach((item, idx) => {
    cartContent.innerHTML += `
      <div class="cart-item">
        <div class="cart-details">
          <h2>${item.brand} ${item.model}</h2>
          <p>Memory: ${item.ram}GB / ${item.rom}GB</p>
          <p>Camera: ${item.camera}</p>
          <div class="quantity-controls">
            <button onclick="decrementQuantity(${idx}, ${item.price})">-</button>
            <span id="qty-${idx}">${item.quantity}</span>
            <button onclick="incrementQuantity(${idx}, ${item.price})">+</button>
          </div>
          <h4 id="item-price-${idx}">Price: $${item.price * item.quantity}</h4>
          <button onclick="deleteItem(${idx})" class="purchase-btn">Delete</button>
          <button class="purchase-btn" onclick="placeOrder()">Purchase</button>
        </div>
      </div>
    `;
  });
}

function incrementQuantity(index, price) {
  const qtyElem = document.querySelector(`#qty-${index}`);
  const priceElem = document.querySelector(`#item-price-${index}`);
  qtyElem.innerHTML++;
  priceElem.innerHTML = `Price: $${price * qtyElem.innerHTML}`;
}

function decrementQuantity(index, price) {
  const qtyElem = document.querySelector(`#qty-${index}`);
  const priceElem = document.querySelector(`#item-price-${index}`);
  if (qtyElem.innerHTML > "1") {
    qtyElem.innerHTML--;
    priceElem.innerHTML = `Price: $${price * qtyElem.innerHTML}`;
  }
}

function deleteItem(index) {
  cartData.splice(index, 1); // Remove item from array
  localStorage.setItem("cartData", JSON.stringify(cartData)); // Update localStorage
  renderCart(); // Re-render cart to reflect changes
}

function placeOrder() {
  Swal.fire("Thank you!", "Your order has been placed successfully.", "success");
}

// Initial render of cart
renderCart();