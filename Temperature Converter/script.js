document.addEventListener("DOMContentLoaded", function () {
    function checkInputValue(celsiusInputValue) {
        if (isNaN(celsiusInputValue)) {
            insertErrorMessage("not a number")
            return false;
        }

        if (celsiusInputValue === "") {
            insertErrorMessage("empty input field")
            return false;
        }

        if (/\s/.test(celsiusInputValue)) {
            insertErrorMessage("white spaces")
            return false
        }

        if (celsiusInputValue < -273.15) {
            insertErrorMessage("too cold")
            return false;
        }

        if (celsiusInputValue > 15000000000) {
            insertErrorMessage("too hot")
            return false;
        }

        return true;
    }

    function insertErrorMessage(message) {
        var row = table.insertRow(1);

        row.id = "error_message_row";

        row.insertCell(0);
        var cell2 = row.insertCell(1);
        row.insertCell(2);

        cell2.id = "error_message";
        cell2.innerHTML = "Error: " + message;
    }

    function convertCelsiusToFahrenheit(celsius) {
        var result = (celsius * 9 / 5) + 32;
        return Math.round(result * 100) / 100;
    }

    function convertCelsiusToKelvin(celsius) {
        var result = Number(celsius) + 273.15
        return Math.round(result * 100) / 100;
    }

    var celsiusInputField = document.getElementById("celsius");
    var fahrenheitOutputField = document.getElementById("fahrenheit");
    var kelvinOutputField = document.getElementById("kelvin");

    var convertButton = document.getElementById("convert_button");
    var resetButton = document.getElementById("reset_button");

    var table = document.getElementById("temperature_table");

    convertButton.addEventListener("click", function () {
        if (document.getElementById("error_message_row")) {
            table.deleteRow(1);
        }

        var celsiusInputValue = celsiusInputField.value;

        if (!checkInputValue(celsiusInputValue)) {
            return;
        }

        fahrenheitOutputField.value = convertCelsiusToFahrenheit(celsiusInputValue);
        kelvinOutputField.value = convertCelsiusToKelvin(celsiusInputValue);
    });

    resetButton.addEventListener("click", function () {
        if (document.getElementById("error_message_row")) {
            table.deleteRow(1);
        }

        celsiusInputField.value = null;
        fahrenheitOutputField.value = null;
        kelvinOutputField.value = null;
    });
});