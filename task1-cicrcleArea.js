const radius = parseInt((process.argv.slice(2))[0]);
const pi = 3.141592;

function calculateArea (r) {
  let area = (pi)*(r**2);
  console.log(`Yarıçapı "${r}" olan dairenin alanı: "${area}"`);
}

calculateArea(radius);