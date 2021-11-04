//promises

// async await
// consume/use promises

// pending, rejected, FulFilled

const promise = new Promise((resolve,reject)=>{
    resolve('hello bro')// Promise { 'hello bro' }
    resolve([1,2,3])
    reject('there was an error')// Promise { <rejected> 'there was an error' }
  })
   
  console.log(promise)
  // console.log(promise.value) // undefined
  
  promise.then((data)=> console.log(data)) //[ 1, 2, 3 ]
  // Promise { undefined }
  
  promise.then((element)=> console.log(element)).catch((err)=>console.log(err)) //[ 1, 2, 3 ]
  // Promise { <pending> }
  
  
  const value = 2
  
  const promise2 = new Promise((resolve,reject)=>{
    const random = Math.floor(Math.random()*3)
    console.log(random)
    if(random === value){
      resolve('you guessed correctly')
    }
    else{
      reject('wrong number')
    }
  })