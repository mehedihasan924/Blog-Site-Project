import React from 'react';
import './Tshirt.css'
const Tshirt = ({tshirt,hendleAddToCart}) => {
    const {picture, name, price}=tshirt;
    return (
        <div className='t-shirt' >
          <img  src={picture} alt="" />
          <h1>{name}</h1>
          <p>{price}</p>
          <button onClick={()=>hendleAddToCart(tshirt)}> Buy Now</button>
        </div>
    );
};

export default Tshirt;