import React from 'react';

const Cart = ({cart,hendleRemoveFromCart}) => {

 //Condition set   
    let massage;
    if(cart.length===0){
        massage=<p> Please Add Som Product</p>
    }
    return (
        <div>
                <h1 className={`bold bordered ${cart.length===1 ? 'div-greeen':'div-yellow' }`}> Shopping Cart</h1>


             {/* Cndititional CSS  */}
            <h1 className={cart.length===1? ' bg-slate-300': 'bg-red-500'}>Order summery {cart.length}</h1>
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

// @@ Conditional CSS
// 1. use terrnary
// 2.ternary templet sting