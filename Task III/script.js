function convertTemp() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const inputUnit = document.getElementById('inputUnit').value;
    let output = '';

    // Check if the input is a valid number
    if (isNaN(inputTemp)) {
        document.getElementById('output').innerText = "Please enter a valid temperature.";
        return;
    }

    // Convert based on input unit
    if (inputUnit === 'celsius') {
        const toFahrenheit = (inputTemp * 9/5) + 32;
        const toKelvin = inputTemp + 273.15;
        output = `${inputTemp}°C is ${toFahrenheit.toFixed(2)}°F or ${toKelvin.toFixed(2)}K`;
    } else if (inputUnit === 'fahrenheit') {
        const toCelsius = (inputTemp - 32) * 5/9;
        const toKelvin = ((inputTemp - 32) * 5/9) + 273.15;
        output = `${inputTemp}°F is ${toCelsius.toFixed(2)}°C or ${toKelvin.toFixed(2)}K`;
    } else if (inputUnit === 'kelvin') {
        const toCelsius = inputTemp - 273.15;
        const toFahrenheit = (inputTemp - 273.15) * 9/5 + 32;
        output = `${inputTemp}K is ${toCelsius.toFixed(2)}°C or ${toFahrenheit.toFixed(2)}°F`;
    }

    // Display result
    document.getElementById('output').innerText = output;
}