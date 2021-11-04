//Dynamic Object keys

//dot notation
const person = {
    name:'john'
  };
  console.log(person.name);
  person.age = 25;
  console.log(person);
  // {name:'john',age:25}
  
  //square bracket notation
  const items = {
    'featured-items':['item1','item2']
  }
  
  console.log(items['featured-items'])
  //[ 'item1', 'item2' ]
  console.log(person['name'])
  //'john'
  
  let appState = 'loading';
  
  const app = {
    [appState]:true
  }
  console.log(app)
  // { loading: true }
  const keyName = 'computer'
  const apps ={
    [appState]:true
  }
  
  apps[keyName]= 'apple'
  console.log(apps)
  //{ loading: true, computer: 'apple' }
  
  
  const state = {
    loading: true,
    name:'',
    job:''
  }
  
  function updateState(key,value){
    state[key] = value
  }
  
  updateState('name','dave')
  updateState('loading',false)
  //in order to create a new property just provide the nema and the value
  updateState('age',22)
  
  console.log(state);
  
  
  
  
  
  