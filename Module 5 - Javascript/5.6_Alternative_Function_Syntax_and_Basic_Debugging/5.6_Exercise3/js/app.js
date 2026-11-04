const ticketPricing = (age) => {
  if (age < 12) {
    return 5;
  } else if (age >= 12 && age <= 59) {
    return 8;
  } else if (age >= 60) {
    return 6;
  }
};

console.log(ticketPricing(11));

console.log(ticketPricing(25));

console.log(ticketPricing(60));
