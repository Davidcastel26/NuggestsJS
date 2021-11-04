//reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1st parameter ('acc') - total of all calculations  (acumulater)
// 2nd parameter ('curr') - current iteration/value  (current)

const staff = [
    {name:'bob', age:20, position:"developer",salary:100},
    {name:'peter', age:25, position:"designer",salary:300},
    {name:'susy', age:30, position:"the boss",salary:400},
    {name:'anna', age:35, position:"intern",salary:10},
  ]
  
  const dailyTotal = staff.reduce((total,person)=>{
    console.log(total) // 0, 0, 0, 0,
    console.log(person.salary) // 100 300 400 10
    total+= person.salary
    return total
  },0)
  console.log(dailyTotal)// 0
  
  //----------------OBJECT EXAMPLE ----------------------------
  //reduce - objects

//cart example
const cart = [
    {
      title: 'Samsung Galaxy S7',
      price:599.99,
      amount:1,
    },
    {
      title: 'google pixel',
      price: 499.99,
      amount: 2,
    },
    {
      title: 'Xiaomi Redmi Note 2',
      price:699.99,
      amount:4,
    },
    {
      title: 'Xiaomi Redmi Note 5',
      price:399.99,
      amount:4,
    },  
  ]
  
  let {totalItems,cartTotal} = cart.reduce((acc,cartItem)=>{
    // console.log(cartItem) 
    const {amount,price} = cartItem;
      //count item
    acc.totalItems += amount
      // count 
    acc.cartTotal += amount * price
    return acc
  },{
    totalItems: 0,
    cartTotal: 0,
  })
  cartTotal = parseFloat(cartTotal.toFixed(2))
  //without destructuring
  //console.log(total) //{ totalItems: 11, cartTotal: 5999.89 }
  console.log(totalItems,cartTotal)
  //github repos example
  
  
  //------------------------------------
  //counting how many repos there are in the api
  
  const url = 'https://api.github.com/users/john-smilga/repos?per_page=100'
  
  const fetchRepos = async()=>{
    const response = await fetch(url)
    const data = await response.json()
    const newData = data.reduce((total,repo)=>{
      const {language} = repo;
    //this the lond wait to do it 
      /* if(language){ //if we did not add this 'ifstatme' we'll get a null parameter into the obj
        if(total[language]){
          total[language] = total[language] + 1
        }
        else{
          total[language] = 1
        }
    } */
    // refactoring the code (if statment)---------------------------------
      if(language){
        total[language] = total[language] + 1 || 1
      }
      return total
    },{})
    console.log(newData)
  } 
  fetchRepos()