// Product data
const price = 50;
const quantity = 3;
const discount = 10;

// Calculate total price before discount
const total = price * quantity;

// Calculate discount amount
const discountAmount = (total * discount) / 100;

// Calculate final price after discount
const finalPrice = total - discountAmount;

console.log("Total: ", finalPrice);
