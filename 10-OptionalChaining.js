const people = [
    {
      name:'bob',
      location: { street:'123 main street',
                  timezone: {offset: '+7:00'}
                }
    },
    {
      name:'peter',
      location: { street:'123 Pine street'}
    },
    {
      name:'susan',
      location: { street:'123 Apple Street',
                  timezone: {offset: '+9:00'}
                }
    },
  ]
  
  people.forEach((person)=>{
    console.log(person.name) // 'bob' 'peter' 'susan'
    console.log(person.location.timezone.offset) // this is an error
     console.log(person.location && person.location.timezone && person.location.timezone.offset ) // '+7:00' undefined '+9:00'
    console.log(person?.location?.timezone?.offset) // '+7:00' undefined '+9:00'
    console.log(person?.location?.timezone?.offset || 'hello i am here') //'+7:00' 'hello i am here' '+9:00'
  })  
  console.log(true && ' hello world') //' hello world'
  console.log(false && ' hey sup!') // false
  