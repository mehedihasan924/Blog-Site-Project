import React from 'react';

const Cart = (props) => {
   const cart=props.cart
   console.log(cart)

    let total=0;
    let shipping=0;
    for(const product of cart){
        total=total+ product.price
        shipping=shipping+product.shipping
    }
     const tax=total*5/100;
     const GrangTotal= total+shipping+tax;
    return (
        <div className=''>
               <h1> Blog Details  </h1>
               <h3> select Items:{cart.length} </h3>
               <h4> TotalPrice: {total} </h4>
               <p>Total shiping:{ shipping} </p>
               <p>Tax: {tax} </p>
               <p> garnd Total:{GrangTotal} </p>
        </div>
    );
};

export default Cart;