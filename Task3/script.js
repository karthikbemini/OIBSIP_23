function validateInput(input) {
    if (!/^-?\d*\.?\d*$/.test(input)) {
        alert("Please enter a valid number.");
        document.getElementById("temperature").value = "";
    }
}

function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const conversionType = document.getElementById("conversionType").value;
    let result;

    switch (conversionType) {
        case "celsiusToFahrenheit":
            result = (temperatureInput * 9 / 5) + 32;
            document.getElementById("result").innerHTML = result.toFixed(2) + " °F";
            break;
        case "fahrenheitToCelsius":
            result = (temperatureInput - 32) * 5 / 9;
            document.getElementById("result").innerHTML = result.toFixed(2) + " °C";
            break;
        case "celsiusToKelvin":
            result = temperatureInput + 273.15;
            document.getElementById("result").innerHTML = result.toFixed(2) + " K";
            break;
        case "fahrenheitToKelvin":
            result = (temperatureInput - 32) * 5 / 9 + 273.15;
            document.getElementById("result").innerHTML = result.toFixed(2) + " K";
            break;
        case "kelvinToCelsius":
            result = temperatureInput - 273.15;
            document.getElementById("result").innerHTML = result.toFixed(2) + " °C";
            break;
        case "kelvinToFahrenheit":
            result = (temperatureInput - 273.15) * 9 / 5 + 32;
            document.getElementById("result").innerHTML = result.toFixed(2) + " °F";
            break;
        default:
            alert("Invalid conversion type.");
            break;
    }
}