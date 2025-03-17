const inputValue = 10;
const milesToKm = false;
const kmToMiles = true;
let result = 0;


if (milesToKm) {
  result = inputValue * 1.60934;
} else if (kmToMiles) {
  result = inputValue / 1.60934;
}
const resultString = inputValue + " miles are " + result + " km ";
const resultElement = document.getElementById('resultElement');
console.log (resultString);