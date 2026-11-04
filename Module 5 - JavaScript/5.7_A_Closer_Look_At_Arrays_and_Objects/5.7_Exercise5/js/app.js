const prices = { 
  laptop: 1000, 
  phone: 500, 
  tablet: 300, 
  monitor: 200 
}; 

const updatedPrices = {}

for (key in prices) {
    console.log(key + " " + prices[key]);
    updatedPrices[key] = Math.round(prices[key] * 1.10)
}

console.log("-------------New prices---------------");

for (key in updatedPrices) {
    console.log(key + " " + updatedPrices[key]);
}