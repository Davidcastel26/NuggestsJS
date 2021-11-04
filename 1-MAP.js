//Map method
const people = [
    {
     name:'bob',
     age: 20,
     position: 'developer',
    },
    {
      name:'ana',
      age:25,
      position: 'designer',
    },
    {
      name:'susy',
      age:30,
      position:'the boss',
    },
    {
      name:'dave',
      age:22,
      position:'CTO',
    }
  ]
  
  //returns a new array
  
  const ages = people.map((person)=>{
    console.log(person)
    // return [{name:34}]
    // return person.age;
    return person.age * 2;
  })
  // console.log(ages)
  console.log(ages)
  
  const getNames = (ele) => ele.name;
  const names = people.map(getNames)
  console.log(names)
  
  
  const newPeople = people.map((item)=>{
    return {
      firstName : item.name.toUpperCase(),
      oldAge: item.age + 20,
    }
  })
  
  console.log(newPeople)
  
  const nameS = people.map((person) => `<h2>${person.name}</h2>`)
  const rs = documen.querySelector("#result")
  rs.innerHTML = names.join('');
  
  