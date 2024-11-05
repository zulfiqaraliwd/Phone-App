const mobiles = [
 
  { brand: "Samsung", model: "Galaxy S21", ram: 8, rom: 128, camera: "64 MP", price: 799 },
{ brand: "Apple", model: "iPhone 13", ram: 4, rom: 128, camera: "12 MP", price: 799 },
{ brand: "OnePlus", model: "9", ram: 12, rom: 256, camera: "48 MP", price: 729 },
{ brand: "Google", model: "Pixel 6", ram: 8, rom: 128, camera: "50 MP", price: 599 },
{ brand: "Xiaomi", model: "Mi 11", ram: 8, rom: 256, camera: "108 MP", price: 749 },
{ brand: "Sony", model: "Xperia 1 III", ram: 12, rom: 256, camera: "12 MP", price: 1299 },
{ brand: "Oppo", model: "Find X3 Pro", ram: 12, rom: 256, camera: "50 MP", price: 1149 },
{ brand: "Vivo", model: "X60 Pro", ram: 12, rom: 256, camera: "48 MP", price: 999 },
{ brand: "Motorola", model: "Edge 20", ram: 8, rom: 256, camera: "108 MP", price: 599 },
{ brand: "Realme", model: "GT", ram: 12, rom: 256, camera: "64 MP", price: 499 },
{ brand: "Asus", model: "ROG Phone 5", ram: 16, rom: 512, camera: "64 MP", price: 999 },
{ brand: "HTC", model: "Desire 21 Pro", ram: 8, rom: 128, camera: "48 MP", price: 399 },
{ brand: "Huawei", model: "P40 Pro", ram: 8, rom: 256, camera: "50 MP", price: 899 },
{ brand: "LG", model: "Wing", ram: 8, rom: 256, camera: "64 MP", price: 999 },
{ brand: "ZTE", model: "Axon 20", ram: 8, rom: 128, camera: "64 MP", price: 399 },
{ brand: "BlackBerry", model: "KEY2", ram: 6, rom: 64, camera: "12 MP", price: 649 },
{ brand: "Lenovo", model: "Legion Phone Duel", ram: 16, rom: 512, camera: "64 MP", price: 999 },
{ brand: "Alcatel", model: "3L", ram: 4, rom: 64, camera: "48 MP", price: 199 },
{ brand: "TCL", model: "10 Pro", ram: 6, rom: 128, camera: "64 MP", price: 449 },
{ brand: "Honor", model: "Magic 3", ram: 12, rom: 256, camera: "50 MP", price: 1099 },
{ brand: "Nokia", model: "8.3", ram: 8, rom: 128, camera: "64 MP", price: 599 },
{ brand: "Infinix", model: "Zero 8", ram: 8, rom: 128, camera: "64 MP", price: 250 },
{ brand: "Tecno", model: "Camon 16 Premier", ram: 8, rom: 128, camera: "64 MP", price: 300 },
{ brand: "Micromax", model: "In Note 1", ram: 4, rom: 64, camera: "48 MP", price: 150 },
{ brand: "Panasonic", model: "Eluga I8", ram: 3, rom: 32, camera: "13 MP", price: 100 },

  // Additional phone data objects...
];

let cartItems = JSON.parse(localStorage.getItem("cartData")) || [];

const container = document.querySelector("#product-list");

mobiles.forEach((item, idx) => {
  container.innerHTML += `
    <div class="product-card">
      <div class="product-details">
        <h2>${item.brand} ${item.model}</h2>
        <p>Memory: ${item.ram}GB / ${item.rom}GB</p>
        <p>Camera: ${item.camera}</p>
        <p>Price: $${item.price}</p>
       <button onclick="addProductToCart(${idx})">Add to Cart</button>

      </div>
    </div>
  `;
});

function addProductToCart(index) {
  const itemIndex = cartItems.findIndex(item => item.model === mobiles[index].model);
  if (itemIndex === -1) {
    mobiles[index].quantity = 1;
    cartItems.push(mobiles[index]);
  } else {
    cartItems[itemIndex].quantity++;
  }
  Swal.fire({
    title: "Added to Cart!",
    text: `${mobiles[index].brand} ${mobiles[index].model} added to cart!`,
    icon: "success",
  });
}

function initiateCheckout() {
  localStorage.setItem("cartData", JSON.stringify(cartItems));
  window.location = "./cart.html";
}
