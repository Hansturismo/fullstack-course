const productLink = document.querySelector("a");
console.log(productLink.getAttribute("href"));

productLink.setAttribute("href", "./products/laptop");
console.log(productLink.getAttribute("href"));
