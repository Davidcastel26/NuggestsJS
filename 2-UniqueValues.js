//unique values es6
const menu = [
    {
      name:'pancakes',
      category: 'breakfast',
    },
    {
      name:'burger',
      category: 'lunch',
    },
    {
      name:'steak',
      category: 'dinner',
    },
    {
      name:'bacon',
      category: 'breakfast',
    },
    {
      name:'eggs',
      category: 'breakfast',
    },
    {
      name:'pasta',
      category: 'lunch',
    },
  ]
  
  // const categories = menu.map((item)=>item.category)
  // console.log(categories);
  // names
  const productsNames = new Set(menu.map((ele)=>ele.name))
  console.log(productsNames)
  console.log('---')
  ///set -> onlye returns uniquis values
  //spred for cateogies and it'll equal to a new array and spreed of my Set
  const categories = [...new Set(menu.map((item)=> item.category))]
  //[ 'breakfast', 'lunch', 'dinner' ]
  console.log(categories)
  //for the div seciont in the html
  // <div class='result'></div>
  const result = document.querySelector('.result')
  //inserting the value into the html
  result.innerHTML = categories
    .map((category)=>{
      return `<button> ${category} </button>`;
    })
    .join('');
  

  