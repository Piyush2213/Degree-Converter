const inputTemp = document.getElementById("inputValue");
const inputDegree = document.getElementById("inputDegree");
const outputDegree = document.getElementById("outputDegree");
const convertButton = document.querySelector("button");
const resultParagraph = document.getElementById("result");

convertButton.addEventListener("click", (event) => {
    event.preventDefault();

    const temperature = parseFloat(inputTemp.value);
    const fromUnit = inputDegree.value;
    const toUnit = outputDegree.value;

    let result;
    if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
        result = (temperature * 9/5) + 32;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
        result = (temperature - 32) * 5/9;
    } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
        result = temperature + 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
        result = temperature - 273.15;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
        result = (temperature + 459.67) * 5/9;
    } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
        result = (temperature * 9/5) - 459.67;
    } else {
        resultParagraph.textContent = "Invalid conversion. Please select different units.";
        return;
    }
    resultParagraph.textContent = `${temperature} ${fromUnit} is equal to ${result.toFixed(2)} ${toUnit}`;
});
