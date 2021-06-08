//grab the header and style it
var heading = document.getElementById("header");
heading.textContent = "JavaScript Made This!!";
heading.style.textAlign = "center";
heading.style.fontSize = "30px";
heading.style.fontWeight = "bold";

//make a container for the heading, so that you can add the byline to it later
var headingContainer = document.createElement("div");
document.body.prepend(headingContainer);
headingContainer.append(heading);

//creating the byline, adding it to the container, styling it
var byLine = document.createElement("header");
headingContainer.append(byLine);
byLine.innerHTML += "<span id='headingColor'>Tyler</span> wrote the JavaScript";
byLine.style.textAlign = "center";
byLine.style.fontWeight = "bold";
document.getElementById("headingColor").style.color = "gold";

//changing text of initial messages
var messageLeftList = document.getElementsByClassName("messageLeft");
var messageRightList = document.getElementsByClassName("messageRight");
messageLeftList[0].textContent = "I like pie";
messageLeftList[1].textContent = "That's cool";
messageRightList[0].textContent = "So do I";
messageRightList[1].textContent = "Same";

//clear messages when user hits "clear" button
var clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function(){
    for (var i = messageLeftList.length - 1; i >= 0; i--) {
        messageLeftList[i].remove();
    }
    for (var i = messageRightList.length - 1; i >= 0; i--) {
        messageRightList[i].remove();
    }
});

//change color theme of messages when user uses theme dropdown menu
var themeMenu = document.getElementById("theme-drop-down");
var rightMessage = document.getElementsByClassName("messageRight");
var leftMessage = document.getElementsByClassName("messageLeft");
themeMenu.addEventListener("click", function(){
    var option = themeMenu.options[themeMenu.selectedIndex].value;
    if (option === "theme-one") {
        for (var i = 0; i < rightMessage.length; i++) {
                rightMessage[i].style.backgroundColor = "lightblue";
        }
        for (var i = 0; i < leftMessage.length; i++) {
            leftMessage[i].style.backgroundColor = "burlywood";
        }
    }
    else if (option === "theme-two") {
        for (var i = 0; i < rightMessage.length; i++) {
            rightMessage[i].style.backgroundColor = "red";
            }
        for (var i = 0; i < leftMessage.length; i++) {
            leftMessage[i].style.backgroundColor = "gray";
        }
    }
});

//add more messages when clicking send
var messageSide = "left";
var sendButton = document.getElementById("send");
sendButton.addEventListener("click", function(){
    var messageContainer = document.getElementById("messages");
    var newMessage = document.createElement("div");
    var content = document.getElementById("input").value;
    newMessage.innerText = content;
    if (messageSide == "left") {
        newMessage.classList.add("messageLeft");
        messageSide = "right";
        messageContainer.append(newMessage);
    }
    else if (messageSide == "right") {
        newMessage.classList.add("messageRight");
        messageSide = "left";
        messageContainer.append(newMessage);
    }
});