function convert() {
  var celsiusInput = document.getElementById("celsius");
  var fahrenheitInput = document.getElementById("fahrenheit");
  var resultDiv = document.getElementById("result");

  if (celsiusInput.value !== "") {
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9/5) + 32;
    resultDiv.innerHTML = `${celsius} Celsius is equal to ${fahrenheit.toFixed(2)} Fahrenheit.`;
    fahrenheitInput.value = ""; 
  } else if (fahrenheitInput.value !== "") {
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celsius = (fahrenheit - 32) * 5/9;
    resultDiv.innerHTML = `${fahrenheit} Fahrenheit is equal to ${celsius.toFixed(2)} Celsius.`;
    celsiusInput.value = ""; 
  } else {
    resultDiv.innerHTML = "Please enter a temperature.";
  }
}
