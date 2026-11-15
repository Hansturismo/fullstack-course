const selectEmailInput = document.getElementsByName("userEmail");
console.log(selectEmailInput);

const selectPasswordInput = document.getElementsByName("userPassword");
console.log(selectPasswordInput);

const selectCheckboxes = document.querySelectorAll([
  '[name="newsletter"], [name="product-updates"], [name="promotions"]',
]);
console.log(selectCheckboxes);

const selectCheckedCheckboxes = document.querySelector('[checked=""]');
console.log(selectCheckedCheckboxes);
