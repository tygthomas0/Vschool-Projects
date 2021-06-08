const readline = require('readline-sync');
var maxHP = 20;
var userHP = maxHP;
var inventory = [];
var foundDoor = false;
var dungeonLevel = 1;
var equippedWeapon;
var wizardStatus = true;

const userName = readline.question("What is your name? ");

function Weapon(name, level) {
    this.name = name;
    this.damageLower = Math.floor(Math.random() * 8 * (level / 2) - (level * Math.floor(Math.random() * 5)));
    if (this.damageLower < level) {
        this.damageLower = level;
    }
    this.damageUpper = Math.floor(Math.random() * 6 * (level / 2) + (level * Math.floor(Math.random() * 5)));
    if (this.damageUpper <= this.damageLower) {
        this.damageUpper = this.damageLower + 1;
    }
    this.doDamage = function(lower, upper) {
        return Math.floor(Math.random() * (upper - lower) + lower);
    }
}

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

function createNewWeapon(level) {
    var prefix = ["", "Flaming", "Majestic", "Sharpened", "Divine", "Icy", "Blood-stained", "Dire", "Dark", "Magic", "Blessed", "Crystalline", "Pestilent", "Holy", "Demonic", "Large"];
    var weapons = ["Sword", "Axe", "Spear", "Dagger", "Staff", "Polearm", "Halberd", "Greatsword", "Longsword", "Shortsword", "Gloves", "Whip", "Zweihander"];
    var suffix = ["of Fire", "of Ice", "of Blood", "of Magic", "of the Divine", "of Pestilence", "of Demons", "of God", "of Justice", "of Hate", "", "of Light", "of Darkness"];
    var prefixIndex = Math.floor(Math.random() * prefix.length);
    var weaponsIndex = Math.floor(Math.random() * weapons.length);
    var suffixIndex = Math.floor(Math.random() * suffix.length);
    var weaponName = prefix[prefixIndex] + " " + weapons[weaponsIndex] + " " + suffix[suffixIndex];

    var newWeapon = new Weapon(weaponName, level);
    return newWeapon;
}

function enemyEncounter(level) {
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
    if (level <= 3) {
        console.log("You have encountered a " + enemy.name + "!");
    }
    else {
        console.log("You have encountered " + enemy.name + "!");
    }
    while (fighting) {
        console.log("");
        console.log(enemy.name + " | " + enemy.health + " HP");
        console.log(userName + " | " + userHP + " HP");
        var attackOrRun = readline.question("Do you want to [a]ttack the monster or [r]un away? ");
        if (attackOrRun == "a") {
            var userDamage = equippedWeapon.doDamage(equippedWeapon.damageLower, equippedWeapon.damageUpper);
            enemy.health -= userDamage;
            console.log("You dealt " + userDamage + " damage!");
            if (enemy.health <= 0) {
                console.log("You slayed the " + enemy.name + "! Your max health has increased. You find a weapon on the monster's body: ");
                var newWeapon = createNewWeapon(dungeonLevel);
                inventory.push(newWeapon);
                console.log(newWeapon.name + ", " + newWeapon.damageLower + "-" + newWeapon.damageUpper + " damage");
                maxHP += Math.floor(enemy.startingHealth / 3);
                userHP = maxHP;
                if (enemy.name == "The Wizard") {
                    console.log("You have slain the wizard and avenged your father. Great job!\nThanks for playing!");
                    wizardStatus = false;
                }
                break;
            }
            var enemyDamage = enemy.doDamage(enemy.damageLower, enemy.damageUpper);
            userHP -= enemyDamage;
            console.log("The enemy dealt " + enemyDamage + " damage to you!");
            if (userHP <= 0) {
                console.log("The " + enemy.name + " tears you to pieces. You have died, leaving your father unavenged.");
                fighting = false;
            }
        }
        else {
            var enemyDamage = enemy.doDamage(enemy.damageLower, enemy.damageUpper);
            userHP -= enemyDamage;
            if (Math.random() <= 0.5) {
                fighting = false;
                console.log("The enemy dealt " + enemyDamage + " damage to you while you were escaping!");
            }
            else {
                console.log("The enemy dealt " + enemyDamage + " damage to you. You were unable to escape.");
            }
            
        }
    }
}

var startingWeapon = new Weapon("Dad's Sword", dungeonLevel);
inventory.push(startingWeapon);
equippedWeapon = startingWeapon;

console.log("The door of the wizard's castle slams shut behind you. In your hand is your father's sword, dulled from years of use. It wasn't much, but you were going to avenge him one way or another.");
console.log('"' + userName + '! You will never defeat me!" The wizard. His voice booms from the top of the castle. You must slay him, the man who killed your father.');
console.log("There are 3 levels in the castle, with the wizard being located on the 4th. You are on level 1. Enemies will randomly attack you as you explore, and get stronger the higher in the castle you go.");
console.log("Press 'W' to walk, or 'p' to see your status and inventory.");



while (userHP > 0 && wizardStatus) {
    if (dungeonLevel == 4) {
        enemyEncounter(6);
        break;
    }
    var choice = readline.question("You are on Level " + dungeonLevel + ". Press [w] to walk around and explore, [p] to see your status and inventory, or [q] to quit. ");
    if (choice == "q") {
        break;
    }
    if (choice == "p") {
        var inventoryContents = " | Inventory: ";
        for (var i = 0; i < inventory.length; i++) {
            inventoryContents += (inventory[i].name + ", " + inventory[i].damageLower + "-" + inventory[i].damageUpper + " DMG // ");
        }
        console.log("Name: " + userName + " | HP = " + userHP + " | Equipped Weapon: " + equippedWeapon.name + inventoryContents);
        if (inventory.length > 1) {
            var equipNew = readline.question("Would you like to equip a different weapon? [y]es or [n]o? ");
            if (equipNew == "y") {
                var weaponIndex = readline.question("Enter the number of the weapon you want to equip (1 for the first, 2 for the second, etc.): ");
                equippedWeapon = (inventory[weaponIndex - 1]);
            }
        }
        continue;
    }
    if (choice == "w") {
        var door = Math.random();
        if (door <= 0.1) { foundDoor = true; }
        if (foundDoor) {
            var advance = readline.question("You have found the door to the next level. Would you like to [adv]ance, or stay on the [cur]rent level and look for more monsters to fight? ");
            if (advance == "adv") {
                foundDoor = false;
                dungeonLevel++;
                continue;
            }
        }

        var randomEncounter = Math.random();
        if (randomEncounter <= 0.34) {
            enemyEncounter(dungeonLevel);
        }
        else {
            console.log("You didn't encounter anything. Keep Looking for the door to the next level.");
        }
    }
}