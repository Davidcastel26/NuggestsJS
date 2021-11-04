// JavaScript Nuggets - Callback Hell

// after 1s fisrt red;
// after 3s second blue;
// after 2s third green
// IN SEQUENCE !!!

const first = document.querySelector('.fisrt')
const second = document.querySelector('.second')
const third = document.querySelector('.third')

const btn = document.querySelector('.third')

btn.addEventListener('click', ()=>{
  console.log('hello') // hello
  setTimeout(()=>{
    first.style.color = 'red'
       setTimeout(()=>{
       first.style.color = 'blue'
         setTimeout(()=>{
         first.style.color = 'red'
      }, 2000)
    }, 3000)
  }, 1000)
 
  setTimeout(()=>{
    first.style.color = 'red'
  }, 2000)
})