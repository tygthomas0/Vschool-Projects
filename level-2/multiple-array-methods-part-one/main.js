//use array methods to create a function that returns a list of anyone older than 18,
//which is sorted alphabetially by last name, and where each name and age is inside of a <li></li>

var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function sortedOfAge(arr) {
    var ofAge = arr.reduce((final, person) => {
        if (person.age >= 18) {
            final.push(person);
        }
        return final;
    }, []);
    var byLastName = ofAge.sort((a, b) => {
        var textA = a.lastName.toUpperCase();
        var textB = b.lastName.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    return byLastName.map(person => "<li>" + person.firstName + " " + person.lastName + " is " + person.age + "</li>");
}
console.log(sortedOfAge(peopleArray));