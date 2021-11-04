  // spreed operator...
// Allows and iterable to spread/expand individually inside reciever
// split into single items and COPY them

const udemy = 'udemy'
const letter = [...udemy]
console.log(letter) //[ 'u', 'd', 'e', 'm', 'y' ]
//=====
const boys = ['john','peter','bob']
const girls = ['susan','anna']

const bestFriend = 'arnold'

const friends = [boys,girls,bestFriend]
console.log(friends) /* [[ 'john', 'peter', 'bob' ],[ 'susan', 'anna' ],'arnold']*/

//reference
// const newFriends = friends;
//copy
const newFriends = [...friends]
newFriends[0] = 'nancy'
console.log(newFriends) //[ 'nancy', [ 'susan', 'anna' ], 'arnold' ]
console.log(friends)  //[[ 'john', 'peter', 'bob' ],[ 'susan', 'anna' ],'arnold' ]

//ES2018 - ES8 Objects

const person = {name:'john', job:'developer'}

const newPerson = {...person,city:'guate',name:'dave'}

console.log(person) //{ name: 'john', job: 'developer' }
console.log(newPerson) //{ name: 'dave', job: 'developer', city: 'guate' }



