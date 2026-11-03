const cart = {
  items: 4,
  pricePerItem: 25,
  discount: 10,
};

const calculateCart = () => {
  cartTotal = cart.items * cart.pricePerItem;
  cartDiscount = cartTotal * (cart.discount / 100);
  console.log(`Price of items in cart: ${cartTotal}`);
  console.log(`Base discount: ${cart.discount}`);
  console.log(`Discount based on total: ${cartDiscount}`);
  
  return `Final price: ${cartTotal - cartDiscount}`
};

console.log(calculateCart());
