var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemPrice = Math.floor(Math.random() * 100);
  var newObject = {[item] : itemPrice};
  cart.push(newObject);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length == 0){
    console.log('Your shopping cart is empty.');
  }
  else{
    var newString = 'In your cart, you have ';
    for (let i=0; i<cart.length-1; i++){
      newString = newString + Object.keys(cart[i])[i] + ' at $' + cart[i][Object.keys(cart[i])[i]];
    }
    console.log('In your cart, you have ');
  }
}

function total() {
  var totalPrice = 0;
  for (let i=0; i<cart.length; i++){
    totalPrice += cart[i][Object.keys(cart[i])[i]];
  }
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
