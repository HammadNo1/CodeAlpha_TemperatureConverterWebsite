function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    let result;

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (inputTemp * 9/5) + 32;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        result = inputTemp + 273.15;
    } else if (fromUnit === "celsius" && toUnit === "rankine") {
        result = (inputTemp + 273.15) * 9/5;
    } else if (fromUnit === "celsius" && toUnit === "reaumur") {
        result = inputTemp * 4/5;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (inputTemp - 32) * 5/9;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        result = (inputTemp - 32) * 5/9 + 273.15;
    } else if (fromUnit === "fahrenheit" && toUnit === "rankine") {
        result = inputTemp + 459.67;
    } else if (fromUnit === "fahrenheit" && toUnit === "reaumur") {
        result = (inputTemp - 32) * 4/9;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        result = inputTemp - 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        result = (inputTemp - 273.15) * 9/5 + 32;
    } else if (fromUnit === "kelvin" && toUnit === "rankine") {
        result = inputTemp * 9/5;
    } else if (fromUnit === "kelvin" && toUnit === "reaumur") {
        result = (inputTemp - 273.15) * 4/5;
    } else if (fromUnit === "rankine" && toUnit === "celsius") {
        result = (inputTemp - 491.67) * 5/9;
    } else if (fromUnit === "rankine" && toUnit === "fahrenheit") {
        result = inputTemp - 459.67;
    } else if (fromUnit === "rankine" && toUnit === "kelvin") {
        result = inputTemp * 5/9;
    } else if (fromUnit === "rankine" && toUnit === "reaumur") {
        result = (inputTemp - 491.67) * 4/9;
    } else if (fromUnit === "reaumur" && toUnit === "celsius") {
        result = inputTemp * 5/4;
    } else if (fromUnit === "reaumur" && toUnit === "fahrenheit") {
        result = (inputTemp * 9/4) + 32;
    } else if (fromUnit === "reaumur" && toUnit === "kelvin") {
        result = (inputTemp * 5/4) + 273.15;
    } else if (fromUnit === "reaumur" && toUnit === "rankine") {
        result = (inputTemp * 9/4) + 491.67;
    } else {
        result = inputTemp; // If units are the same
    }

    document.getElementById("resultText").textContent = `${inputTemp} ${fromUnit} is ${result.toFixed(2)} ${toUnit}`;
}


