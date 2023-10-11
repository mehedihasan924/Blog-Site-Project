// Use local storage manage to cart data 

//local stored a add function***
const addToDb=id=>{
// ata korlei add hobe items***  
        // console.log("add Items",id);
        // localStorage.setItem(id,1);
let shoppingCart;

//get the shopping cart 
const storedCart=localStorage.getItem('shopping-Cart');
    if(storedCart){
      shoppingCart=JSON.parse(storedCart)
    }
    else{
        shoppingCart={};
    }


// add na takle new add hobe,, takle ***
    const quantity=shoppingCart[id]
//    const quantity=localStorage.getItem(id)
        if(quantity){
      //just quantity baranu hoise***  
                const newQuantity=quantity+1;
                shoppingCart[id]=newQuantity;
                // localStorage.setItem(id,newQuantity);
            console.log("alredy axits")
        }
        else{
            shoppingCart[id]=1;
            // localStorage.setItem(id,1);
            console.log("new Item")
        }
        localStorage.setItem('shopping-Cart' , JSON.stringify(shoppingCart));
}

//Remove Items
const removeFromDb=(id)=>{
  const storedCart=localStorage.getItem('shopping-Cart');
    if(storedCart){
        const shoppingCart=JSON.parse(storedCart);
        if(id in shoppingCart){
           delete shoppingCart[id];
           localStorage.setItem('shopping-Cart' , JSON.stringify(shoppingCart));
        }
    }
}

export {addToDb,removeFromDb }