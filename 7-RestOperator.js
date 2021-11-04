//gathers/collecst intems
// destructuring, functions
//placement important, careful with the same name
// rest when declare function, spread when invoke the function\

//arrays
const fruits = ['apple', 'orange', 'lemon', 'banana'];
const [first, ...restOfTheFruits] = fruits;
console.log(first, restOfTheFruits) // apple [ 'orange', 'lemon', 'banana' ]
const specifictFruit = restOfTheFruits.find((fruit)=> fruit === 'lemon')
console.log(specifictFruit) // lemon
//objects 
const person = { name:'dave', lastName:"l", job: 'developer'}
// {...rest, job} -> won't work since we are using the rest
const {name, ...rest} = person
console.log(name, rest) // dave { lastName: 'l', job: 'developer' }

//function

const getAverage = (name,...scores)=>{
  console.log(name)  // dave
  console.log(scores) //[ 3, 4, 5 ]
  const average = scores.reduce((total, item)=>{return total += item},0) / scores.length;
  console.log(average) // 4
}

// getAverage(person.name,3,4,5)
const testScores = [23,45,67,89]
getAverage(person.name,...testScores)

