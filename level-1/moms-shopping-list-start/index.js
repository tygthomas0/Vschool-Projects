const form = document["add-item"];


form.addEventListener("submit", function(event) {
    event.preventDefault();

    createItem(form.input);
});

function edit(e) {
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.setAttribute("name", "save-button");
    saveButton.setAttribute("class", "saveButton");
    saveButton.setAttribute("onClick", "save(this);");


    //const textValue1 = document.getElementsByName("delete-button")[0].string();
    //const textValue2 = document.getElementsByName("edit-button")[0].string();
    const inputNew = document.createElement("input");
    inputNew.setAttribute("name", "editItem");
    inputNew.setAttribute("class", "editItem");
    inputNew.setAttribute("value", (e.parentNode.textContent));
    //inputNew.setAttribute("value", (e.parentNode.textContent - textValue2 - textValue1));
    e.parentNode.appendChild(saveButton);
    e.parentNode.appendChild(inputNew);
    e.remove();
}

function save(e) {
    const input = document.getElementsByName("editItem")[0];
    
    createItem(input);
    e.parentNode.remove();
}

function createEditButton(e) {
    const editButton = document.createElement("button");
    editButton.textContent = "Edit Item";
    editButton.setAttribute("name", "edit-button");
    editButton.setAttribute("class", "editButton");
    editButton.setAttribute("onClick", "edit(this);");
    e.appendChild(editButton);
}

function createDeleteButton(e) {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.setAttribute("name", "delete-button");
    deleteButton.setAttribute("class", "deleteButton");
    deleteButton.setAttribute("onClick", "this.parentNode.parentNode.removeChild(this.parentNode);");
    e.appendChild(deleteButton);
}

function createItem(e) {
    const item = e.value;
    e.value = "";

    const li = document.createElement("li");
    li.textContent = item;

    createDeleteButton(li);
    createEditButton(li);

    document.getElementsByName("item-list")[0].append(li);
}