//Fetch API

// fetch api - browser API for HTTP (AJAX) requests 
// default - get requests, supports other methods as well
// returns promise

const url = 'https://www.course-api.com/react-tours-project'

// console.log(fetch(url)) 
/*
fetch(url)
  .then((resp)=>resp.json())//console.log(resp))
  .then(data => console.log(data))
  .catch((err)=>console.log(err))
*/
//async away

const getTours = async () => {
  try{
    const resp = await fetch(url)
    if(!resp.ok){
      const msg = `There was an error '${resp.status} ${resp.statusText}'`
      throw new Error(msg)
    }
    const data = await resp.json()
    console.log(data)
    // return data
  }
  catch(error){
    console.log(error)
  }
}
// console.log(getTours().then)
getTours()

const btn = document.querySelector('.btn')
btn.addEventListener('click', getTours)