const bob={
    first:'dave',
    last:'l',
    city:'guate',
    siblings:{
      sister:'jane'
    }
  }
  
  const {siblings:{sister:favortieSibli}} = bob
  console.log(favortieSibli)
  
  const printPerson = ({first,last}) =>{
    // const {first,last} = persont
    console.log(first,last)
  }
  printPerson(bob)