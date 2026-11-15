const submitButton = document.querySelector("button");
const productDisplayName = document.querySelector(".product-display__name");
const productDisplayCategory = document.querySelector(
  ".product-display__category",
);
const productDisplayPrice = document.querySelector(".product-display__price");

submitButton.addEventListener("click", () => {
  event.preventDefault();
  const productName = document.querySelector(".product-form__name");
  console.log(productName);
  const productCategory = document.querySelector(".product-form__category");
  console.log(productCategory);
  const productPrice = document.querySelector(".product-form__price");
  console.log(productPrice);
  productDisplayName.textContent = productName.value;
  productDisplayCategory.textContent = productCategory.value;
  productDisplayPrice.textContent = productPrice.value;
});
