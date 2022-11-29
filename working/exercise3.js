// let empty = {};
// console.log(empty);

const person = {
    name: "John Doe",
    yearOfBirth: 1987,
    pet: "dog"
}
console.log(person);
console.log(person.yearOfBirth);
console.log(person['yearOfBirth']);

for (const key in person) {
    //const can be used here as the key is only a constant within the loop/scope
    console.log("key =", key, "value =", person[key]);
    //if u use , then no need put space
    //plus just joins the string
    //cannot put person.key in the for loop
    //key becomes a string so can only use person['key name in string']
    //person.key if key is a string that u are putting person."key" in the command
}