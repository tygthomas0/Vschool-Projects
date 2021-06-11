const form = document["airlineForm"];


form.addEventListener("submit", function(event) {
    event.preventDefault();
    var first = form.firstName.value;
    var last = form.lastName.value;
    var ageVal = form.age.value;
    var gen = form.gender.value;
    var destin = form.destin.value;
    var food = [];
    for (let i = 0; i < form.diet.length; i++) {
        if (form.diet[i].checked) {
            food.push(form.diet[i].value);
        }
    }
    alert("First Name: " + first + "\nLast Name: " + last + "\nAge: " + ageVal + "\nGender: " + gen + "\nDiet: " + food + "\nTraveling to: " + destin);
});