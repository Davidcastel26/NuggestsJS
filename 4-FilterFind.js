// filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition 

//Find - returns single instance (object), returns first match, if no match - undefined

const people = [
  {name:'bob',age:21,position:'developer'},
  {name:'dave',age:22,position:'designer'},
  {name:'cris',age:46,position:'the boss'},
  {name:'anna',age:33,position:'intern'}
]
const fruits = ['orange','pear','lemon'];
//----------------- filter -----------------------------------------
const young = people.filter((person)=>{
   // if(person.age < 30) return person
  return person.age<30
})
console.log(young)// [
//   { name: 'bob', age: 21, position: 'developer' },
//   { name: 'dave', age: 22, position: 'designer' }
// ]
const developers = people.filter((position)=>position.position === 'developer')
console.log(developers) //[ { name: 'bob', age: 21, position: 'developer' } ]
  
// ---------------- no match -------------------------
const seniorDevs = people.filter((pers)=>pers.position ==='senior dev')
console.log(seniorDevs) // []

// ------------------- find ---------------------------
const subjectName = people.find((p)=> p.name === 'dave')
console.log(subjectName) // { name: 'dave', age: 22, position: 'designer' }
const getFruit = fruits.find((fruit)=> fruit === 'lemon')
console.log(getFruit) //'lemon'

// -------------------- no match ----------------------   
const oldPerson = people.find((person) => person.age > 50)
console.log(oldPerson) // undefined

//-------------MULTIPLE matches - first match ---------------------
const randomPerson = people.find((person)=> person.age < 35)
console.log(randomPerson)//{ name: 'bob', age: 21, position: 'developer' } /*alway we are going to get the first item*/


const getPerson = people.filter((p)=>p.name === 'anna')
console.log(subjectName.position) // designer ((find we can get the index))
console.log(getPerson[0].position) // intern  ((with filter we cannot get the index so we will need to incovqued))



