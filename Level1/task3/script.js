function convert() {
  alert("Button Clicked");
  const temp = parseFloat(document.getElementById("temp").value);
  const unit = document.getElementById("unit").value;
  const result = document.getElementById("result");

  if (isNaN(temp)) {
    result.textContent = "Please enter a valid number";
    return;
  }

  let converted;
  if (unit === "fahrenheit") {
    converted = ((temp - 32) * 5) / 9;
    result.textContent = `${converted.toFixed(4)}°C`;
  } else {
    converted = (temp * 9) / 5 + 32;
    result.textContent = `${converted.toFixed(4)}°F`;
  }
}