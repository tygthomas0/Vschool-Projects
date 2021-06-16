const readline = require('readline-sync');
var maxHP = 20;
var userHP = maxHP;
var inventory = [];
var foundDoor = false;
var dungeonLevel = 1;
var equippedWeapon;
var wizardStatus = true;

//asks user their name and stores it
const userName = readline.question("What is your name? ");

//creates a weapon with a name and a random damage range based on the level the user is on
function Weapon(name, level) {
    this.name = name;
    this.damageLower = Math.floor(Math.random() * 8 * (level / 2) - (level * Math.floor(Math.random() * 5)));
    if (this.damageLower < level) { //has a handicap for the damage so that it is always at least equal to the level the user got it on
        this.damageLower = level;
    }
    this.damageUpper = Math.floor(Math.random() * 6 * (level / 2) + (level * Math.floor(Math.random() * 5)));
    if (this.damageUpper <= this.damageLower) { //has a handicap for the damage so that it is always at least 1 over the minimum damage
        this.damageUpper = this.damageLower + 1;
    }
    this.doDamage = function(lower, upper) { //generates random amount of damage based on range
        return Math.floor(Math.random() * (upper - lower) + lower);
    }
}

//creates a random enemy for the user to fight during an encounter
//enemy has name, and damage range similar to how the weapon damage range is determined
function Enemy(name, level) {
    this.name = name;
    this.health = Math.floor(Math.random() * 10 * level + (level * 3));
    this.startingHealth = this.health;
    this.damageLower = Math.floor(Math.random() * 6 * (level / 2) - (level * 2));
    if (this.damageLower < level) {
        this.damageLower = level;
    }
    this.damageUpper = Math.floor(Math.random() * 4 * (level / 2) + (level * 2));
    if (this.damageUpper <= this.damageLower) {
        this.damageUpper = this.damageLower + 1;
    }
    this.doDamage = function(lower, upper) {
        return Math.floor(Math.random() * (upper - lower) + lower);
    }
}

//creates a random weapon with a random selection of prefixes and suffixes, then creates the weapon object with the generated name and the level the user is on
function createNewWeapon(level) {
    var prefix = ["", "Flaming ", "Majestic ", "Sharpened ", "Divine ", "Icy ", "Blood-stained ", "Dire ", "Dark ", "Magic ", "Blessed ", "Crystalline ", "Pestilent ", "Holy ", "Demonic ", "Large "];
    var weapons = ["Sword", "Axe", "Spear", "Dagger", "Staff", "Polearm", "Halberd", "Greatsword", "Longsword", "Shortsword", "Gloves", "Whip", "Zweihander"];
    var suffix = [" of Fire", " of Ice", " of Blood", " of Magic", " of the Divine", " of Pestilence", " of Demons", " of God", " of Justice", " of Hate", "", " of Light", " of Darkness"];
    var prefixIndex = Math.floor(Math.random() * prefix.length);
    var weaponsIndex = Math.floor(Math.random() * weapons.length);
    var suffixIndex = Math.floor(Math.random() * suffix.length);
    var weaponName = prefix[prefixIndex] + weapons[weaponsIndex] + suffix[suffixIndex];

    var newWeapon = new Weapon(weaponName, level);
    return newWeapon;
}


//handles the enemy encounter
function enemyEncounter(level) {
    //creates a new enemy with a random name, based on the level the user is on
    //enemy names are specific to the level they are on, but are randomly chosen from that level's name list
    var enemyName = "";
    var nameIndex = Math.floor(Math.random() * 2 + 1);
    if (level == 1) {
        var enemyNameList = ["Hungering Rat", "Pestilent Spider", "Homonculus"];
        enemyName = enemyNameList[nameIndex];
    }
    else if (level == 2) {
        var enemyNameList = ["Dire Wolf", "Steel Guardian", "Novice Sorcerer"];
        enemyName = enemyNameList[nameIndex];
    }
    else if (level == 3) {
        var enemyNameList = ["Reanimated Corpsepile", "Guardian Hellkite", "Divine Enforcer"];
        enemyName = enemyNameList[nameIndex];
    }
    else {
        enemyName = "The Wizard";
    }
    var enemy = new Enemy(enemyName, level);
    
    var fighting = true;
    //generates message based on whether the user is in the boss fight, because the boss has the word "The" in its name. "a the" isn't grammatically correct
    if (level <= 3) {
        console.log("You have encountered a " + enemy.name + "!");
    }
    else {
        console.log("You have encountered " + enemy.name + "!");
    }
    //fighting loop
    while (fighting) {
        //shows the enemy name and HP, then the user's name and HP
        console.log("\n" + enemy.name + " | " + enemy.health + " HP");
        console.log(userName + " | " + userHP + " HP");
        //asks user if they want to attack the enemy or attempt to escape
        var attackOrRun = readline.question("Do you want to [a]ttack the monster or [r]un away? ");
        if (attackOrRun == "a") { //user attacks
            var userDamage = equippedWeapon.doDamage(equippedWeapon.damageLower, equippedWeapon.damageUpper); //user's weapon deals damage based on damage range
            enemy.health -= userDamage; //deals damage to enemy and logs a message
            console.log("You dealt " + userDamage + " damage!");
            if (enemy.health <= 0) { //if the enemy is killed by the attack, gives death message, creates a new weapon for the user, refills and upgrades user's HP. Gives win message if the enemy was the final boss
                if (enemy.name == "The Wizard") {
                    console.log("You have slain the wizard and avenged your father. Great job!\nThanks for playing!");
                    wizardStatus = false;
                }
                else {
                    console.log("You slayed the " + enemy.name + "! Your max health has increased, and your health has refilled to max. You find a weapon on the monster's body: ");
                    var newWeapon = createNewWeapon(dungeonLevel);
                    inventory.push(newWeapon);
                    console.log(newWeapon.name + ", " + newWeapon.damageLower + "-" + newWeapon.damageUpper + " damage");
                    maxHP += Math.floor(enemy.startingHealth / 3);
                    userHP = maxHP;
                }
                break;
            }
            //if the enemy survives, they do damage to the user
            var enemyDamage = enemy.doDamage(enemy.damageLower, enemy.damageUpper);
            userHP -= enemyDamage;
            console.log("The enemy dealt " + enemyDamage + " damage to you!");
            if (userHP <= 0) { //if the user is killed by the attack, plays a death message and ends the game
                console.log("The " + enemy.name + " tears you to pieces. You have died, leaving your father unavenged.");
                fighting = false;
            }
        }
        else if (attackOrRun == "r") { //user attempts to run away
            var enemyDamage = enemy.doDamage(enemy.damageLower, enemy.damageUpper); //enemy deals damage to them during their escape attempt
            userHP -= enemyDamage;
            if (Math.random() <= 0.5) { //50% chance for the user to escape. If they don't, loops back around to attack or run option. If they do, ends fight loop
                fighting = false;
                console.log("The enemy dealt " + enemyDamage + " damage to you while you were escaping!");
            }
            else {
                console.log("The enemy dealt " + enemyDamage + " damage to you. You were unable to escape.");
            }
        }
        else { //loops back to beginning if the user doesn't put in attack or run
            console.log("Invalid input.");
            continue;
        }
    }
}

//generates starting weapon, equips it, puts it in inventory
var startingWeapon = new Weapon("Dad's Sword", dungeonLevel);
inventory.push(startingWeapon);
equippedWeapon = startingWeapon;

//intro text
console.log("The door of the wizard's castle slams shut behind you. In your hand is your father's sword, dulled from years of use. It wasn't much, but you were going to avenge him one way or another.");
console.log('"' + userName + '! You will never defeat me!" The wizard. His voice booms from the top of the castle. You must slay him, the man who killed your father.');
console.log("There are 3 levels in the castle, with the wizard being located on the 4th. You are on level 1. Enemies will randomly attack you as you explore, and get stronger the higher in the castle you go.");
console.log("Press 'w' to walk, or 'p' to see your status and inventory.");

//game loop
while (userHP > 0 && wizardStatus) {
    if (dungeonLevel == 4) { //checks to see if the user is on the boss level and starts boss encounter if they are
        enemyEncounter(6);
        break;
    }
    //gives user the option to walk around, view their status and inventory, or quit the game
    if (foundDoor) {
        var choice = readline.question("You are on Level " + dungeonLevel + ". Press [d] to advance through the door to the next level, [w] to walk around and explore, [p] to see your status and inventory, or [q] to quit. ");
    }
    else {
        var choice = readline.question("You are on Level " + dungeonLevel + ". Press [w] to walk around and explore, [p] to see your status and inventory, or [q] to quit. ");
    }
    if (choice == "q") { //user quits the game
        break;
    }
    else if (choice == "p") { //user displays status and inventory
        var inventoryContents = " | Inventory: ";
        for (var i = 0; i < inventory.length; i++) { //displays weapons and damage in inventory
            inventoryContents += (inventory[i].name + ", " + inventory[i].damageLower + "-" + inventory[i].damageUpper + " DMG // ");
        }
        console.log("Name: " + userName + " | HP = " + userHP + " | Equipped Weapon: " + equippedWeapon.name + inventoryContents);
        if (inventory.length > 1) { //checks to see if the inventory has more than one weapon in it. If there is, asks if they want to equip a new one
            var equipNew = readline.question("Would you like to equip a different weapon? [y]es or [n]o? ");
            if (equipNew == "y") {
                var weaponIndex = readline.question("Enter the number of the weapon you want to equip (1 for the first, 2 for the second, etc.): ");
                if (weaponIndex < 1) {
                    weaponIndex = 1;
                }
                else if (weaponIndex > inventory.length) {
                    weaponIndex = inventory.length;
                }
                equippedWeapon = (inventory[weaponIndex - 1]);
            }
            //checks to see if the user wants to drop any weapons they have in their inventory
            var dropWeapon = readline.question("Do you want to permanently remove any weapons from your inventory to save space? [y]es or [n]o? ");
            if (dropWeapon == "y") {
                console.log(inventoryContents);
                var weaponIndex = readline.question("Enter the number of the weapon you want to drop (1 for the first, 2 for the second, etc.): ");
                if (weaponIndex < 1) {
                    weaponIndex = 1;
                }
                else if (weaponIndex > inventory.length) {
                    weaponIndex = inventory.length;
                }
                inventory.splice(weaponIndex - 1, 1);
                //if the user dropped their equipped weapon, then it tells them to equip a new weapon
                var hasEquippedWeapon = false;
                for (let i = 0; i < inventory.length; i++) {
                    if (equippedWeapon == inventory[i]) {
                        hasEquippedWeapon = true;
                        break;
                    }
                }
                if (hasEquippedWeapon == false) {
                    var newWeaponIndex = readline.question("You dropped your equipped weapon. Enter the number of the new weapon you want to equip (1 for the first, 2 for the second, etc.): ");
                    if (newWeaponIndex < 1) {
                        newWeaponIndex = 1;
                    }
                    else if (newWeaponIndex > inventory.length) {
                        newWeaponIndex = inventory.length;
                    }
                    equippedWeapon = (inventory[newWeaponIndex - 1]);
                }
            }
        }
        continue;
    }
    else if (choice == "w") { //user walks around. 10% chance to find the door to the next level. If they find the door, they can go back to it at any time outside of an enemy encounter
        var door = Math.random();
        if (door <= 0.1) { 
            console.log("You found the door! You can advance through it at any time outside of an enemy encounter. ");
            foundDoor = true;
        }

        //34% chance to encounter an enemy, starts an enemy encounter if they find one
        var randomEncounter = Math.random();
        if (randomEncounter <= 0.34) {
            enemyEncounter(dungeonLevel);
        }
        else {
            console.log("You didn't encounter anything. Keep Looking for the door to the next level.");
        }
    }
    else if (choice == "d" && foundDoor) {
        foundDoor = false;
        dungeonLevel++;
        continue;
    }
    else {
        console.log("Invalid option.");
    }
}