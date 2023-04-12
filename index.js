console.log("file runnning");
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
// const doProblem = async () => {
//     let peopleArray = await getAndReturnPeople();
//     for(let i = 0; i < peopleArray.length; i++) {
//     console.log(peopleArray[i].name)
//     }
// }
// doProblem()
// Medium - Loop through this array and make a new array that only contains people that are shorter than 170cm
// const doProblem = async () => {
//     let peopleArray = await getAndReturnPeople();
//     let shortPeopleArray = peopleArray.filter(person => person.height < 170);
//     console.log(shortPeopleArray);
//   }
//   doProblem();              
// // Hard - loop thorugh and find the tallest and shortest males and females.
const doProblem = async () => {
    let peopleArray = await getAndReturnPeople();
  
    let males = peopleArray.filter(person => person.gender === "male");
    let females = peopleArray.filter(person => person.gender === "female");
  
    let tallestMale = males.reduce((max, person) => max.height > person.height ? max : person);
    let shortestMale = males.reduce((min, person) => min.height < person.height ? min : person);
    let tallestFemale = females.reduce((max, person) => max.height > person.height ? max : person);
    let shortestFemale = females.reduce((min, person) => min.height < person.height ? min : person);
  
    console.log(`Tallest male: ${tallestMale.name}`);
    console.log(`Shortest male: ${shortestMale.name}`);
    console.log(`Tallest female: ${tallestFemale.name}`);
    console.log(`Shortest female: ${shortestFemale.name}`);
  }
  
// // Very Hard - loop through and for each person write a string that says "This person is <name> and their ship is <name of ship if any>"
// // if no ship, say "and they have no ship."
// const doProblem = async () => {
//     let peopleArray = await getAndReturnPeople();
  
//     for(let person of peopleArray) {
//       let ship = person.starships.length > 0 ? person.starships[0] : "no ship";
//       console.log(`This person is ${person.name} and their ship is ${ship}.`);
//     }
//   } 

//: the getAndReturnPeople function returns a promise that resolves with the array of people objects. Therefore, in order to access this array in the rest of the code, we need to either use await or .then() to wait for the promise to resolve. In the provided code, both approaches are demonstrated. The doProblem function uses await to wait for the promise to resolve and then proceeds with the code. The peopleArray variable outside of doProblem uses .then() to wait for the promise to resolve and then logs the resulting array.
  
  