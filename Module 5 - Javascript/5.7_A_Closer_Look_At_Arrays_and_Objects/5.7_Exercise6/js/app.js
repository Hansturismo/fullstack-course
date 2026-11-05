const product = { 
  name: "Laptop", 
  price: 1200, 
  details: { 
    ram: "16GB", 
    storage: "512GB" 
  } 
}; 
console.log("------------original object displayed with console.log------------------");
for (key in product) {
    console.log(key, product[key]);
    
}

console.log("------------updated object displayed with console.log-------------------");


const updatedProduct = structuredClone(product)
updatedProduct.price = 1000;
updatedProduct.details.ram = "32GB";
for (key in updatedProduct) {
    console.log(key, updatedProduct[key]);
    
}
// original object remains unchanged when creating a copy using structuredClone()

console.log("------updated object displayed using console.log & JSON.stringify-------");
// Using stringify we can show deeper values.

console.dir(JSON.stringify(product, null, 2));

