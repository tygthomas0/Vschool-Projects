var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
var computerCount = 0;

for (var i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        computerCount++;
    }
}
console.log("There are " + computerCount + " computers in the list.");

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
];

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let him in.");
        }
        else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let her in.");
        }
    }
    else {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max, let him in.");
        }
        else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max, let her in.");
        }
    }
}

var toggle = "off";
var toggleMenu = [9, 4, 3, 2];

for (var i = 0; i < toggleMenu.length; i++) {
    for (var j = 0; j < toggleMenu[i]; j++) {
        if (toggle === "off") {
            toggle = "on";
        }
        else if (toggle === "on") {
            toggle = "off";
        }
    }
}
console.log("The light is " + toggle + ".");