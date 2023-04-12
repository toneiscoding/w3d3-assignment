let getAndReturnPeople = async () => {
    let response = await fetch('https://swapi.dev/api/people')
    let parsedResponse = await response.json()
    let peopleArray = parsedResponse.results;

    return peopleArray;
}
let peopleArray = getAndReturnPeople();

// const doProblem = async () => {
//     let peopleArray = await getAndReturnPeople();
//     console.log(peopleArray);
//     // do your work here inside this function
// }
// doProblem()


// "Easy" - Loop through this array of objects and and log the name of each person
const doProblem = async () => {
    let peopleArray = await getAndReturnPeople();
    for(let person of peopleArray) {
    console.log(person.name)
    }
}
// Medium - Loop through this array and make a new array that only contains people that are shorter than 170cm

// Hard - loop thorugh and find the tallest and shortest males and females.

// Very Hard - loop through and for each person write a string that says "This person is <name> and their ship is <name of ship if any>"
// if no ship, say "and they have no ship."