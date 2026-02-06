let cart = JSON.parse(localStorage.getItem("cart")) || [];

// 🔑 GLOBAL FUNCTION (VERY IMPORTANT)
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart");
}


// 🛒 CART PAGE ONLY
document.addEventListener("DOMContentLoaded", () => {
  const cartDiv = document.getElementById("cart");
  if (!cartDiv) return;

  renderCart();
});

function renderCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  if (cart.length === 0) {
    cartDiv.innerHTML = "<p>Cart is empty</p>";
    return;
  }

  cart.forEach((item, index) => {
    cartDiv.innerHTML += `
      <div class="card">
        <img src="${item.image}">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button onclick="removeItem(${index})">Remove</button>
        <button onclick="checkout(${index})">Chechout</button>
      </div>
    `;
  });
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function checkout() {
  window.location.href = "address.html";
}



