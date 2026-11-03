const imageOrientation = (width, height) => {
  if (width > height) {
    return "Landscape";
  } else if (width < height) {
    return "Portrait";
  } else if (width == height) {
    return "Square";
  }
};
// Landscape
console.log(imageOrientation(1000, 400));
// Portrait
console.log(imageOrientation(400, 1000));
// Square
console.log(imageOrientation(500, 500));
