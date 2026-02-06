const products = [
  { id: 1, name: "LG Refrigerator", price: 26999, image: "Fridge.jpg" },
  { id: 2, name: "Croma Washing Machine", price: 16999, image: "Wasingmachine.jpg" },
  { id: 3, name: "Samsung TV", price: 18999, image: "Tv.jpg" },
  { id: 4, name: "LG AC", price: 30499, image: "Ac.jpg" },
  { id: 5, name: "Fan", price: 2999, image: "Fan.jpg" },
  { id: 6, name: "Mixer", price: 3499, image: "Mixer.jpg" },
  { id: 7, name: "Oven", price: 9999, image: "Oven.jpg" },
  { id: 8, name: "Grinder", price: 4499, image: "Grinder.jpg" },
  { id: 9, name: "Iron Box", price: 1499, image: "Ironbox.jpg" },
  { id: 10, name: "Heater", price: 2999, image: "Heater.jpg" },
  { id: 11, name: "Cooler", price: 6999, image: "Cooler.jpg" },
  { id: 12, name: "Vacuum", price: 7999, image: "Vacuum.jpg" },
  { id: 13, name: "Dishwasher", price: 28499, image: "Dishwasher.jpg" },
  { id: 14, name: "Toaster", price: 2499, image: "Toaster.jpg" },
  { id: 15, name: "Microwave", price: 8999, image: "Microwave.jpg" },
  { id: 16, name: "Coffee Maker", price: 5999, image: "Coffee Maker.jpg" },
  { id: 17, name: "Induction", price: 4499, image: "Induction.jpg" },
  { id: 19, name: "Air Purifier", price: 16999, image: "Air Purifier.jpg" },
  { id: 20, name: "Water Heater", price: 8999, image: "Water Heater.jpg" },

];




function displayProducts(list) {
  const container = document.getElementById("products");
  if (!container) return;

  container.innerHTML = "";

  list.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick='addToCart(${JSON.stringify(p)})'>
          Add to Cart
        </button>
      </div>
    `;
  });
}


function displayProducts(list) {
  const container = document.getElementById("products");
  if (!container) return;

  container.innerHTML = "";

  list.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}


