$(document).ready(function () {
    var initialText;

    var addTodoHandler = function () {
        var inputText = todoInputText.val();

        if (!inputText.replace(/\s/g, '').length) {
            alert("Input field is empty");
            return;
        }

        var todoItem = $("<li></li>");

        todoItem.html(listItemHtml);

        todoItem.find(".list_item_text").text(inputText);
        todoList.append(todoItem);

        todoInputText.val("");

        var currentDeleteButton = todoItem.find(".delete_button");
        currentDeleteButton.on("click", deleteHandler);

        var currentEditButton = todoItem.find(".edit_button");
        currentEditButton.on("click", editHandler);
    }

    var deleteHandler = function (event) {
        event.target.closest("li").remove();
    }

    var editHandler = function (event) {
        var todoItem = $(event.target.closest("li"));

        var currentEditButton = todoItem.find(".edit_button")
        var currentDeleteButton = todoItem.find(".delete_button");

        initialText = todoItem.find(".list_item_text").text();
        todoItem.html(editListItemHtml);
        todoItem.find(".list_item_input_text").val(initialText);
        todoItem.find(".list_item_input_text").addClass("changed_text");

        var currentSaveButton = todoItem.find(".save_button");
        currentSaveButton.on("click", {arg1: currentEditButton, arg2: currentDeleteButton}, saveHandler)

        var currentResetButton = todoItem.find(".cancel_button");
        currentResetButton.on("click", {arg1: currentEditButton, arg2: currentDeleteButton}, resetHandler);
    }

    var saveHandler = function (event) {
        var currentEditButton = event.data.arg1;
        var currentDeleteButton = event.data.arg2;

        var todoItem = $(event.target.closest("li"));

        var currentText = todoItem.find(".list_item_input_text").val();

        if (!currentText.replace(/\s/g, '').length) {
            alert("Input field is empty");
            return;
        }

        todoItem.html("<div class='list_item_text'></div>");

        todoItem.append(currentEditButton);
        todoItem.append(currentDeleteButton);

        currentEditButton.on("click", editHandler);
        currentDeleteButton.on("click", deleteHandler);

        todoItem.find(".list_item_text").text(currentText);
    }

    var resetHandler = function (event) {
        var currentEditButton = event.data.arg1;
        var currentDeleteButton = event.data.arg2;

        var todoItem = $(event.target.closest("li"));

        todoItem.html("<div class='list_item_text'></div>");

        todoItem.append(currentEditButton);
        todoItem.append(currentDeleteButton);

        currentEditButton.on("click", editHandler);
        currentDeleteButton.on("click", deleteHandler);

        todoItem.find(".list_item_text").text(initialText);
    }

    var listItemHtml = "<div class='list_item_text'></div>" +
        "<button type='button' class='edit_button' title='Edit note'><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button>" +
        "<button type='button' class='delete_button' title='Delete note'><i class=\"fa fa-trash\"></i></button>";

    var editListItemHtml = "<input type='text' class='list_item_input_text'>" +
        "<button type='button' class='save_button' title='Save changes'><i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i></button>" +
        "<button type='button' class='cancel_button' title='Cancel changes'><i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i></button>";

    var addTodoButton = $(".add_todo_button");

    var initialEditButtons = $(".edit_button");
    initialEditButtons.on("click", editHandler);

    var initialDeleteButtons = $(".delete_button");
    initialDeleteButtons.on("click", deleteHandler);

    var todoInputText = $(".todo_input_text");
    var todoList = $("#todo_list");

    addTodoButton.on("click", addTodoHandler)
});