//width / height - window, any element
// innerheight - window
// innerwidth - window
// getBoundingClientReact () - any element


console.log('height', window.innerHeight)
console.log('width', window.innerWidth)

const btn = document.querySelector('.btn')
const box = document.querySelector('.box')

btn.addEventListener('click', () => {
  //provide any kind of demention from any element
  const dimensions = box.getBoundingClientRect()
  console.log(dimensions)
})