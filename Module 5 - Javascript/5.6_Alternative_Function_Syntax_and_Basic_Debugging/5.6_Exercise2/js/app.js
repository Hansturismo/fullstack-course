const parkingFee = (hoursParked) => {
  if (hoursParked <= 2) {
    return "No fee";
  } else {
    const total = (hoursParked - 2) * 5;
    return total;
  }
};

console.log(parkingFee(2));

console.log(parkingFee(10));
