document.addEventListener("DOMContentLoaded", function () {
    function insertHtmlAfterEditOperation(todoItem, currentEditBlock, currentDeleteBlock) {
        todoItem.innerHTML = "<div class='list_item_text'></div>";
        todoItem.appendChild(currentEditBlock);
        todoItem.appendChild(currentDeleteBlock);
    }

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

        var currentDeleteBlock = todoItem.querySelector(".delete_button, .fa-trash");

        currentDeleteBlock.addEventListener("click", function () {
            todoItem.remove();
        })

        var currentEditBlock = todoItem.querySelector(".edit_button, .fa-pencil-square-o");

        currentEditBlock.addEventListener("click", function () {
            initialText = todoItem.querySelector(".list_item_text").innerHTML;
            todoItem.innerHTML = editListItemHtml;
            todoItem.querySelector(".list_item_input_text").value = initialText;
            todoItem.querySelector(".list_item_input_text").style.color = "#228B22";

            var currentSaveBlock = todoItem.querySelector(".save_button, .fa-floppy-o");
            currentSaveBlock.addEventListener("click", function () {
                var currentText = todoItem.querySelector(".list_item_input_text").value;
                insertHtmlAfterEditOperation(todoItem, currentEditBlock, currentDeleteBlock)
                todoItem.querySelector(".list_item_text").innerHTML = currentText;
            })

            var currentResetBlock = todoItem.querySelector(".cancel_button, .fa-arrow-up")
            currentResetBlock.addEventListener("click", function () {
                insertHtmlAfterEditOperation(todoItem, currentEditBlock, currentDeleteBlock)
                todoItem.querySelector(".list_item_text").innerHTML = initialText;
            })
        });
    });
});