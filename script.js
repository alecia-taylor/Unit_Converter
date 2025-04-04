
function convert() {
  const inputValue = document.getElementById("userInput").value;
  const unit = document.getElementById("unit");
  const milesToKm = unit.value === "milesToKm";
  let result = 0;

  if (milesToKm) {
    result = inputValue * 1.60934;
  } else {
    result = inputValue / 1.60934;
  }

  const resultString = inputValue + " units are " + result + " converted units";
  const resultElement = document.getElementById('resultElement');
  resultElement.innerHTML = resultString;
  console.log(resultString);
}