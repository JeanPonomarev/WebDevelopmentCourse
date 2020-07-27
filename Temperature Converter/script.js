document.addEventListener("DOMContentLoaded", function () {
    function checkInputValue(celsiusInputValue) {
        if (isNaN(celsiusInputValue)) {
            insertErrorMessage("not a number");
            return false;
        }

        if (celsiusInputValue === "") {
            insertErrorMessage("empty input field");
            return false;
        }

        if (/\s/.test(celsiusInputValue)) {
            insertErrorMessage("white spaces");
            return false;
        }

        if (celsiusInputValue < -273.15) {
            insertErrorMessage("too cold");
            return false;
        }

        if (celsiusInputValue > 15000000000) {
            insertErrorMessage("too hot");
            return false;
        }

        return true;
    }

    function insertErrorMessage(message) {
        var error_message_row = document.createElement("div");

        error_message_row.classList.add("temperature_row");
        error_message_row.classList.add("error");

        error_message_row.innerHTML = "Error: " + message;

        calculation_block.insertBefore(error_message_row, document.querySelector(".temperature_row:nth-child(2)"));
    }

    function convertCelsiusToFahrenheit(celsius) {
        var result = (celsius * 9 / 5) + 32;
        return Math.round(result * 100) / 100;
    }

    function convertCelsiusToKelvin(celsius) {
        var result = Number(celsius) + 273.15;
        return Math.round(result * 100) / 100;
    }

    var celsiusInputField = document.getElementById("celsius");
    var fahrenheitOutputField = document.getElementById("fahrenheit");
    var kelvinOutputField = document.getElementById("kelvin");

    var convertButton = document.getElementById("convert_button");
    var resetButton = document.getElementById("reset_button");

    var calculation_block = document.getElementById("temperature_calculation_block");

    convertButton.addEventListener("click", function () {
        if (document.querySelector(".temperature_row.error")) {
            calculation_block.removeChild(document.querySelector(".temperature_row.error"));
        }

        var celsiusInputValue = celsiusInputField.value;

        if (!checkInputValue(celsiusInputValue)) {
            return;
        }

        fahrenheitOutputField.value = convertCelsiusToFahrenheit(celsiusInputValue);
        kelvinOutputField.value = convertCelsiusToKelvin(celsiusInputValue);
    });

    resetButton.addEventListener("click", function () {
        if (document.querySelector(".temperature_row.error")) {
            calculation_block.removeChild(document.querySelector(".temperature_row.error"));
        }

        celsiusInputField.value = null;
        fahrenheitOutputField.value = null;
        kelvinOutputField.value = null;
    });
});