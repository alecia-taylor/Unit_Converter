function convert() {
  const inputValue = document.getElementById("userInput").value;
  const unit = document.getElementById("unit").value;
  let result = 0;
  let units = "";

  if (unit === "milesToKm") {
    result = inputValue * 1.60934;
    units = "km";
  } else if (unit === "kmToMiles") {
    result = inputValue / 1.60934;
    units = "miles";
  } else if (unit === "FtoC") {
    result = (inputValue - 32) * 5 / 9;
    units = "Celsius";
  }
  else if (unit === "CtoF") {
  result = (inputValue * 9 / 5) + 32;
  units = "Fahrenheit";
}

  const resultString = inputValue + " units are " + result + " " + units;
  const resultElement = document.getElementById('resultElement');
  resultElement.innerHTML = resultString;
  
  console.log(resultString);
}