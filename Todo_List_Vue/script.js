Vue.component("todo-item", {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data: function () {
        return {
            editMode: false,
            initialText: null
        };
    },
    methods: {
        deleteItem: function () {
            this.$emit("delete-item", this.item);
        },
        editItem: function () {
            this.initialText = this.item.text;
            this.editMode = true;
        },
        saveChanges: function () {
            if (this.item.text.trim().length === 0) {
                alert("Input field is empty");
                return;
            }

            this.editMode = false;
        },
        cancelChanges: function () {
            this.$emit("cancel-text-change", this.item, this.initialText);
            this.initialText = null;
            this.editMode = false;
        },
    },
    template: "#todo-item-template"
});

Vue.component("todo-list", {
    data: function () {
        return {
            items: [],
            newItemText: "",
            newId: 1
        };
    },
    methods: {
        addItem: function () {
            if (this.newItemText.trim().length === 0) {
                alert("Input field is empty");
                return;
            }

            this.items.push({
                id: this.newId,
                text: this.newItemText
            });

            this.newId++;
            this.newItemText = "";
        },
        deleteItem: function (item) {
            this.items = this.items.filter(function (e) {
                return e !== item;
            });
        },
        cancelTextChange: function (item, initialText) {
            item.text = initialText;
        }
    },
    template: "#todo-list-template"
});

new Vue({
    el: "#my-form"
});