//grabbing HTML element
const form = document["add-item"];

//creates an item when submitting the form, using the value of whatever was put into the form
form.addEventListener("submit", function(event) {
    event.preventDefault();

    createItem(form.input);
});

//creates a new input and a button that allows you to save the value from the new input and change the list item to that
function edit(e) {
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.setAttribute("name", "save-button");
    saveButton.setAttribute("class", "saveButton");
    saveButton.setAttribute("onClick", "save(this);");

    const inputNew = document.createElement("input");
    inputNew.setAttribute("name", "editItem");
    inputNew.setAttribute("class", "editItem");
    inputNew.setAttribute("value", (e.parentNode.textContent));

    e.parentNode.appendChild(saveButton);
    e.parentNode.appendChild(inputNew);
    e.remove();
}

//saves the new list item taken from the value of the input form that is created
function save(e) {
    const input = document.getElementsByName("editItem")[0];
    createItem(input);
    e.parentNode.remove();
}

//creates a button that allows you to edit the list item and adds it to the same line as the list item
function createEditButton(e) {
    const editButton = document.createElement("button");
    editButton.textContent = "Edit Item";
    editButton.setAttribute("name", "edit-button");
    editButton.setAttribute("class", "editButton");
    editButton.setAttribute("onClick", "edit(this);");
    e.appendChild(editButton);
}

//creates a button that allows you to delete the list item along with the edit button and delete button itself
function createDeleteButton(e) {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.setAttribute("name", "delete-button");
    deleteButton.setAttribute("class", "deleteButton");
    deleteButton.setAttribute("onClick", "this.parentNode.parentNode.removeChild(this.parentNode);");
    e.appendChild(deleteButton);
}

//creates an item using value from the form, clears the form, adds list item with edit and delete buttons
function createItem(e) {
    const item = e.value;
    e.value = "";

    const li = document.createElement("li");
    li.textContent = item;

    createDeleteButton(li);
    createEditButton(li);

    document.getElementsByName("item-list")[0].append(li);
}