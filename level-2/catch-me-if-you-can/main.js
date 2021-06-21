//trying out error catching

//returns error if data types of x and y aren't numbers
function sum(x, y) {
    if (typeof x != typeof 1 || typeof y != typeof 1) {
        throw new Error("The value you entered is not a number");
    }
    return x + y;
}

try {
    sum("1", "2");
}
catch(err) {
    console.log(err);
}


var user = { username: "sam", password: "123abc" };
//checks to see if login credentials are correct
function login(username, password) {
    if (username != user.username) {
        throw new Error("Wrong username");
    }
    else if (password != user.password) {
        throw new Error("Wrong password");
    }
    console.log("Logged in");
}

try {
    login("sam", "123abc");
}
catch(err) {
    console.log(err);
}
try{
    login("san", "123abc");
}
catch(err) {
    console.log(err);
}
try {
    login("sam", "124abc");
}
catch(err) {
    console.log(err);
}