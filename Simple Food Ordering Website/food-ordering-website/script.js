let cart = [];
let total = 0;

function addToCart(itemName, price) {
  cart.push({ name: itemName, price: price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("total");

  cartList.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
  });

  totalDisplay.textContent = total.toFixed(2);
}
