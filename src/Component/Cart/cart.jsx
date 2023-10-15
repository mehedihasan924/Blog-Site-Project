import React from 'react';

const Cart = ({cart,hendleRemoveFromCart}) => {

 //Condition set   
    let massage;
    if(cart.length===0){
        massage=<p> Please Add Som Product</p>
    }
    return (
        <div>
            <h1>Order summery {cart.length}</h1>
            {/* Cndition Set */}
                {
                cart.length>2 ? <span> Good Selling</span>:<span> Bed Selling</span>
                }
            {massage}
            { 
                cart.map(tshirt=> 
                 <p 
                key={tshirt._id}
                >
                 {tshirt.name} <button onClick={()=>hendleRemoveFromCart(tshirt._id)}>x </button>
                </p>         
              )
            }

   {/* Cndition Set */}
            {
                cart.length==2 &&<p> Ok  </p>
            }
             {/* Cndition Set */}
            {
                cart.length===3 || <p> 3ta to holo na  </p>
            }
        </div>
    );
};

export default Cart;

// // coditional Rebdaring
// 1 .use if and else.....
// 2. ternary operator:condition ? "for true ": "false"
// 3. logical &&( if thecondition display)
// 4. logial or || useed