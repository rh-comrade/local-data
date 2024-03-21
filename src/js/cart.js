let label = document.getElementById("subtotal");
let ShoppingCart = document.getElementById("shopping_cart");
let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculate = () => {
  // Calculates and updates the total number of items in the cart icon
  let cartIcon = document.getElementById("camount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);

  // Updates the total number of items in the cart
  let cart_amount = basket.length;
  cartIcon.innerHTML = cart_amount;
};

calculate();


function subTotal(event, id) {
  // Calculates and updates the subtotal for a specific item
  let sub = Number(event.target.value);

  if (sub <= 0) {
    removeItem(id);
  } else {
    basket.filter((item) => {
      if (item.id == id) {
        var subtotal = item.price;

        subtotal = sub * item.price;
        item.sub = subtotal;
        item.quentity = sub
        localStorage.setItem("data", JSON.stringify(basket));

        // console.log(item.quentity);
        // document.getElementById('sub').innerHTML = '$' + subtotal;
        generateCartItems();
      }
    });
  }
}

let generateCartItems = () => {
  // Generates HTML for displaying items in the shopping cart
  if (basket.length !== 0) {
    return (ShoppingCart.innerHTML = basket
      .map((x) => {
        let { id, name, price, img, sub=price, quentity=1 } = x;
        return `
          <tr id=prodcut-id-${id}>
            <td><i class="far fa-times-circle" onclick="removeItem(${id})"></i></td>
            <td><img src=${img} alt=""></td>
            <td>${name}</td>
            <td>$${price}</td>
            <td><input type="number" value=${quentity} oninput="subTotal(event, ${id})"></td>
            <td id='sub'>$${sub}</td>
          </tr>
        `;
      }).join(""));
  } else {
    // ShoppingCart.innerHTML = `<h3>Shopping cart is empty</h3>`;
    ShoppingCart.innerHTML = `<div class="empty-cart">
    <video src="/images/shopping-cart.mp4" autoplay></video>
    <h1>Cart is Empty</h1>
    </div>`
  }
};

generateCartItems();

let removeItem = (id) => {
  // Removes an item from the shopping cart
  basket = basket.filter((x) => x.id != id);
  localStorage.setItem("data", JSON.stringify(basket));
  calculate();
  generateCartItems();
};


let Total_amount = () => {
  let total_amount = 0;
  basket.map((item) => {
    total_amount += item.sub;
  });
  label.innerHTML = `
  <h3>Cart Totals</h3>
  <table>
      <tr>
          <td>Cart Subtotal</td>
          <td>${total_amount}</td>
      </tr>
      <tr>
          <td>Shipping</td>
          <td>Free</td>
      </tr>
      <tr>
          <td><strong>Total</strong></td>
          <td><strong>${total_amount}</strong></td>
      </tr>
  </table>
  <button class="normal">Proceed to checkout</button>
  `
};

Total_amount();
