document.addEventListener("DOMContentLoaded", function () {

    var addTodoButton = document.getElementById("add_todo_button");
    var todoInputText = document.getElementById("todo_input_text");
    var todoList = document.getElementById("todo_list");

    var listItemHtml = "<div class='list_item_text'></div>" +
        "<button type='button' class='edit_button'><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button>" +
        "<button type='button' class='delete_button'><i class=\"fa fa-trash\"></i></button>";

    var editListItemHtml = "<input type='text' class='list_item_input_text'>" +
        "<button type='button' class='save_button'><i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i></button>" +
        "<button type='button' class='cancel_button'><i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i></button>";

    var initialText;

    addTodoButton.addEventListener("click", function () {
        var inputText = todoInputText.value;

        if (!inputText.replace(/\s/g, '').length) {
            alert("Input filed is empty");
            return;
        }

        var todoItem = document.createElement("li");

        todoItem.innerHTML = listItemHtml;

        todoItem.querySelector(".list_item_text").textContent = inputText;
        todoList.appendChild(todoItem);

        todoInputText.value = null;
    });

    todoList.addEventListener("click", function (event) {
        var clickedButtonOrItem = event.target;
        var currentListItem

        if (clickedButtonOrItem.tagName === "BUTTON") {
            currentListItem = clickedButtonOrItem.parentNode;
        } else if (clickedButtonOrItem.tagName === "I") {
            currentListItem = clickedButtonOrItem.parentNode.parentNode;
        } else {
            throw Error("Unknown element was added into HTML document");
        }

        if (clickedButtonOrItem.className === "delete_button" || clickedButtonOrItem.className === "fa fa-trash") {
            todoList.removeChild(currentListItem);
            //currentListItem.remove();
        }

        if (clickedButtonOrItem.className === "edit_button" || clickedButtonOrItem.className === "fa fa-pencil-square-o") {
            initialText = currentListItem.querySelector(".list_item_text").innerHTML;
            currentListItem.innerHTML = editListItemHtml;
            currentListItem.querySelector(".list_item_input_text").value = initialText;
            currentListItem.querySelector(".list_item_input_text").style.color = "#228B22";
        }

        if (clickedButtonOrItem.className === "save_button" || clickedButtonOrItem.className === "fa fa-floppy-o") {
            var currentText = currentListItem.querySelector(".list_item_input_text").value;
            currentListItem.innerHTML = listItemHtml;
            currentListItem.querySelector(".list_item_text").innerHTML = currentText;
        }

        if (clickedButtonOrItem.className === "cancel_button" || clickedButtonOrItem.className === "fa fa-arrow-up") {
            currentListItem.innerHTML = listItemHtml;
            currentListItem.querySelector(".list_item_text").innerHTML = initialText;
        }
    });
});