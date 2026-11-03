const calculateDiscountPrice = (price, discountPercentage) => {
  discount = discountPercentage / 100;
  let discountedPrice = price * discount;
  return discountedPrice;
};

console.log(calculateDiscountPrice(300, 50));
