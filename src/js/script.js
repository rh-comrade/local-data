let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};


document.getElementById('click1').addEventListener('click', () => {
  let counterupdate = document.querySelector('.incrementc');
  let count = Number(counterupdate.innerHTML);
  console.log(typeof count)
  count++;
  counterupdate.innerHTML = count;
})
document.getElementById('click2').addEventListener('click', () => {
  let counterupdate = document.querySelector('.incrementc1');
  let count = Number(counterupdate.innerHTML);
  console.log(typeof count)
  count++;
  counterupdate.innerHTML = count;
})
document.getElementById('click3').addEventListener('click', () => {
  let counterupdate = document.querySelector('.incrementc2');
  let count = Number(counterupdate.innerHTML);
  console.log(typeof count)
  count++;
  counterupdate.innerHTML = count;
})


document.getElementById('root').innerHTML = shopItemsData.map((item) => {
  var { id, name, price, img } = item;
  return (
    `<div class="row"><img src="${img}" alt=""><h4>${name}</h4><h5>${price}</h5><div class="top"><p>hot</p></div><div class="bbtn"><button onclick ="add_to_cart('${id}','${name}','${price}','${img}')">Add to Cart </button></div></div>`
  )
}).join('')
var basket = [];
let add_to_cart = (id, name, price, img) => {

  basket.push({
    id: id,
    name: name,
    price: price,
    img: img
  })
  calculate();
  localStorage.setItem('data', JSON.stringify(basket))
  
}
let calculate = () => {
  let cart_icon = document.getElementById('camount');
  let cart_amount = basket.length;
  cart_icon.innerHTML=cart_amount;
};

calculate();

