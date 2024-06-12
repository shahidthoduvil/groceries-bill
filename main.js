// global data of groceries

 const groceries=[
    {product:'milk',quantity:1,price:1.50},
    {product:'cereals',quantity:1,price:2.50},
]

// retrive the title of the groceries

const getTitle=(groceries)=>{
    console.log(groceries)
    return Object.keys(groceries[0])
  
}

// get all the remaing values

const getValues=(groceries)=>{


    return groceries.map((groceriesItem)=>{
          console.log(groceries)
        return Object.values(groceriesItem)
    })

}

// calculate the total price

function getTotalPrice(groceries){
    let totalcost=groceries.map((item)=>{
        return Object.values(item).slice(-2).reduce((acc,num)=>acc*num)
    })
    console.log(totalcost)
    return totalcost.reduce((acc,num)=>acc+num);

    
}


// creating the dynamic ui

const createUi=()=>{

    const groceriesE1=document.querySelector('.groceries')
    const priceE1=document.getElementById('total-price')
   
    console.log(groceriesE1)


   let title= getTitle(groceries)
    title.map((title)=>{
    const listItem=document.createElement('li')
    listItem.innerHTML=title.charAt(0).toUpperCase()+title.slice(1)
    console.log(listItem)
    groceriesE1.appendChild(listItem);

   })

  let itemValues= getValues(groceries)
  itemValues.map(item => {
    
    item.forEach(element => {
        const listItem=document.createElement('li')
        listItem.innerHTML=element
        groceriesE1.appendChild(listItem)
       
        
    });
    
  });
  
   let price= getTotalPrice(groceries)
    priceE1.innerHTML=`$ ${price.toFixed(2)}`;

}

createUi()








