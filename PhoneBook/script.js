$(document).ready(function () {
    var nameInputField = $("#input-name");
    var surnameInputField = $("#input-surname");
    var phoneInputField = $("#input-phone");
    var addContactButton = $("#add-contact-button");
    var tableBody = $("#phone-table tbody");

    var addContactHandler = function () {
        var name = nameInputField.val();
        var surname = surnameInputField.val();
        var phone = phoneInputField.val();

        if (!isFormValid(name, surname, phone)) {
            return;
        }

        var newContactTableRow = $("<tr></tr>")

        newContactTableRow.html(contactHtml);

        var rowCount = $("#phone-table tr").length;
        newContactTableRow.find("th").text(rowCount);

        newContactTableRow.find("td:nth-of-type(1)").text(surname);
        newContactTableRow.find("td:nth-of-type(2)").text(name);
        newContactTableRow.find("td:nth-of-type(3)").text(phone);

        tableBody.append(newContactTableRow);

        newContactTableRow.find("button.delete").on("click", deleteContactHandler);

        nameInputField.val("");
        surnameInputField.val("");
        phoneInputField.val("");
    }

    function isFormValid(name, surname, phone) {
        if (isEmpty(name)) {
            if (!nameInputField.hasClass("is-invalid")) {
                handleValidationError(nameInputField, "name-validation-feedback", "Please enter your name");
            }
        } else {
            removeErrorMessage(nameInputField);
        }

        if (isEmpty(surname)) {
            if (!surnameInputField.hasClass("is-invalid")) {
                handleValidationError(surnameInputField, "surname-validation-feedback", "Please enter your surname");
            }
        } else {
            removeErrorMessage(surnameInputField);
        }

        if (isEmpty(phone)) {
            if (!phoneInputField.hasClass("is-invalid")) {
                handleValidationError(phoneInputField, "phone-validation-feedback", "Please enter your phone number");
            }
        } else {
            removeErrorMessage(phoneInputField);
        }

        return !isEmpty(name) && !isEmpty(surname) && !isEmpty(phone);
    }

    function isEmpty(value) {
        return !value.replace(/\s/g, '').length;
    }

    function handleValidationError(inputField, validationFeedbackId, errorMessage) {
        inputField.addClass("is-invalid");
        inputField.attr("aria-describedby", validationFeedbackId);

        var validationFeedback = $("<div class='invalid-feedback'></div>");
        validationFeedback.text(errorMessage);
        validationFeedback.attr("id", validationFeedbackId);

        validationFeedback.insertAfter(inputField);
    }

    function removeErrorMessage(inputField) {
        inputField.removeClass("is-invalid");
        inputField.removeAttr("aria-describedby");
        inputField.next(".invalid-feedback").remove();
    }

    var deleteContactHandler = function (event) {
        event.target.closest("tr").remove();
        recalculateNumbers();
    }

    function recalculateNumbers() {
        var tableRows = $("tbody tr");

        tableRows.each(function (index) {
            $(this).find("th").text(index + 1);
        });
    }

    var contactHtml = "<th scope='row'></th>" +
        "<td></td>" +
        "<td></td>" +
        "<td></td>" +
        "<td>" +
        "<button class='btn btn-danger delete'><i class='fa fa-times'></i></button>" +
        "</td>";

    addContactButton.on("click", addContactHandler);
});