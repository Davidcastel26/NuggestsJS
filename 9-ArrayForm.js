 // array.from - NOT ON PROTOTYPE

// from - returns Array object from an object
// with a length property or an iterable object
// from - turns array-like/ish into array - string, nodeList, Set

const udemy= 'udemy'

console.log(Array.from(udemy)) //[ 'u', 'd', 'e', 'm', 'y' ]

const text = document.querySelectorAll('.text')
const newText = Array.from(text).find((item)=>item.textContent === 'person')
console.log(newText)

//array from passing into an object
const items = Array.from({length:120},(_,index)=>{
  return index
})

const itemsPerPage = 14;
const pages = Math.ceil(items.length / itemsPerPage)

console.log(items) //[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...119]
//creating arrays of arrays
const newItems = Array.from({length:pages},(_,index)=>{
  const start = index * itemsPerPage
  const tempItems = items.slice(start, start + itemsPerPage)
  return tempItems
})

console.log(pages) // 9

console.log(newItems) /*[
  [
     0,  1, 2, 3,  4,  5,
     6,  7, 8, 9, 10, 11,
    12, 13
  ],
  [
    14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25,
    26, 27
  ],
  [ */