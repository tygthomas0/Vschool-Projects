// pulling from https://api.vschool.io/tylerthomasaxiosproject/todo/

//holds api elements for id purposes
var items;

//creates all of the items and puts them on the page
function createItem(title, price, description, imgURL, completion, id) {
    //creates main item and puts it in the item container
    const item = document.createElement("div");
    item.classList.add("item");
    const flexbox = document.getElementById("flexbox");
    flexbox.appendChild(item);

    //creates item name and adds it to item
    const header = document.createElement("h1");
    header.classList.add("itemHeader");
    header.textContent = `${title} - $${price}`;
    item.appendChild(header);
    
    //creates item image and add its. if there isn't an image it adds a placeholder image
    const img = document.createElement("img");
    img.classList.add("itemImg");
    let image = imgURL;
    if (image === "") {
        image = "photo-not-available.PNG"
    }
    img.src = image;
    item.appendChild(img);
    
    //creates item description and adds it
    const desc = document.createElement("p");
    desc.classList.add("itemDesc");
    desc.textContent = description;
    item.appendChild(desc);
    
    //creates text asking if the item is complete
    const comp = document.createElement("p");
    comp.classList.add("itemDesc");
    comp.textContent = "Complete?";
    
    //creates checkbox that user can press if they have finished the item. if they have, updates the database
    const compButton = document.createElement("input");
    compButton.type = "checkbox";
    compButton.classList.add("completed");
    compButton.id = id;
    compButton.addEventListener("click", function() {
        var url = "https://api.vschool.io/tylerthomasaxiosproject/todo/" + items[id]._id;
        if (compButton.checked) {
            axios.put(url, { completed: true })
                .then(response => {
                    console.log(response);
                    getItems();
                })
                .catch(error => console.log(error));
        }
        else if (!compButton.checked) {
            axios.put(url, { completed: false })
                .then(response => {
                    console.log(response);
                    getItems();
                })
                .catch(error => console.log(error));
        }
    });
    compButton.checked = completion;
    comp.appendChild(compButton);
    item.appendChild(comp);

    //creates a save button that is initally hidden
    const saveButton = document.createElement("button");
    saveButton.classList.add("editsavedelete");
    saveButton.textContent = "Save Changes";
    item.appendChild(saveButton);
    saveButton.setAttribute("hidden", true);
    saveButton.addEventListener("click", function() {
        header.textContent = `${document.getElementById("newName").value} - $${document.getElementById("newPrice").value}`;
        header.removeAttribute("hidden", true);
        img.src = document.getElementById("newImg").value;
        img.removeAttribute("hidden", true);
        desc.textContent = document.getElementById("newDesc").value;
        desc.removeAttribute("hidden", true);
        saveButton.setAttribute("hidden", true);
        editButton.removeAttribute("hidden", true);
        var url = "https://api.vschool.io/tylerthomasaxiosproject/todo/" + items[id]._id;
        axios.put(url, { title: document.getElementById("newName").value, price: document.getElementById("newPrice").value, imgUrl: document.getElementById("newImg").value, description: document.getElementById("newDesc").value} )
            .then(response => {
                console.log(response);
                item.removeChild(document.getElementById("newName"));
                item.removeChild(document.getElementById("newPrice"));
                item.removeChild(document.getElementById("newImg"));
                item.removeChild(document.getElementById("newDesc"));
                getItems();
            })
            .catch(error => console.log(error)); 
    });

    //creates an edit button and adds it
    const editButton = document.createElement("button");
    editButton.classList.add("editsavedelete");
    editButton.textContent = "Edit Item";
    item.appendChild(editButton);
    editButton.addEventListener("click", function() {
        const newName = document.createElement("input");
        newName.value = title;
        newName.id = "newName";
        const newPrice = document.createElement("input");
        newPrice.value = price;
        newPrice.id = "newPrice";
        const newImg = document.createElement("input");
        newImg.value = img.src;
        newImg.id = "newImg";
        const newDesc = document.createElement("input");
        newDesc.value = desc.textContent;
        newDesc.id = "newDesc";
        header.setAttribute("hidden", true);
        console.log("header hidden");
        img.setAttribute("hidden", true);
        console.log("img hidden");
        desc.setAttribute("hidden", true);
        console.log("description hidden");
        item.insertBefore(newDesc, item.children[0]);
        item.insertBefore(newImg, item.children[0]);
        item.insertBefore(newPrice, item.children[0]);
        item.insertBefore(newName, item.children[0]);
        editButton.setAttribute("hidden", true);
        saveButton.removeAttribute("hidden", true);
    });
    
    //creates a delete button and adds it
    const delButton = document.createElement("button");
    delButton.textContent = "Delete Item";
    delButton.classList.add("editsavedelete");
    item.appendChild(delButton);
    delButton.addEventListener("click", function() {
        var url = "https://api.vschool.io/tylerthomasaxiosproject/todo/" + items[id]._id;
        axios.delete(url)
            .then(response => {
                console.log(response);
                getItems();
            });
    });

    //checks to see if the item is completed for purposes of styling
    if (completion) {
        item.style.backgroundColor = "#050505";
        comp.style.color = "white";
        editButton.setAttribute("hidden", true);
    }
    else {
        item.style.backgroundColor = "#902d41";
        comp.style.color = "#050505";
        editButton.removeAttribute("hidden", true);
    }
}

//pulls items from database and calls create function to put them on the page
function getItems() {
    clearItems();
    items = [];
    axios.get("https://api.vschool.io/tylerthomasaxiosproject/todo/")
        .then(response => {
            for (let i = 0; i < response.data.length; i++) {
                items.push(response.data[i]);
                createItem(response.data[i].title, response.data[i].price, response.data[i].description, response.data[i].imgUrl, response.data[i].completed, i);
            }
        })
        .catch(error => console.log(error));
}

//clears the items for the purposes of updating the page with new info
function clearItems() {
    const flexbox = document.getElementById("flexbox");
    while(flexbox.firstChild) {
        flexbox.removeChild(flexbox.firstChild);
    }
}

getItems();

//adds new item when the user has filled out the form
const inputForm = document["addItem"];
inputForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const newItem = {
        title: inputForm.itemName.value,
        price: inputForm.itemPrice.value,
        description: inputForm.itemDesc.value,
        imgUrl: inputForm.itemImg.value
    }

    inputForm.itemName.value = "";
    inputForm.itemPrice.value = "";
    inputForm.itemDesc.value = "";
    inputForm.itemImg.value = "";

    axios.post("https://api.vschool.io/tylerthomasaxiosproject/todo/", newItem)
        .then(response => {
            console.log(response);
            getItems();
        })
        .catch(error => console.log(error));
});

//done except for the headers can't be hidden for some reason, regardless of hitting the edit button