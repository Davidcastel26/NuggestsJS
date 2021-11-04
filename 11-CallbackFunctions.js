// CallBackFunction

function makeUpperCase(value){
    console.log(value.toUpperCase()) // 'CHRIS SMITH'
  }
  makeUpperCase('dave') // 'DAVE'
  
  // array methods, setTimeout, event listeners etc
  
  function reverseString(value){
    console.log(value.split('').reverse().join(''))
  }
  
  function handlName(name, cb){
    const fullName = `${name} smith`
    cb(fullName)
    // some more logic here
    cb(fullName)
  }
  
  handlName('chris',makeUpperCase)
  handlName('chris',reverseString)
  
  handlName('susan', function(value){
    console.log(value)
  })
  
  const btn = document.querySelector('.btn')
  
  btn.addEventListner('click', function(){
    console.log()
  })