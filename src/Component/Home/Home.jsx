import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';
const Home = () => {
        const tshirts =useLoaderData()
        const [cart, setCart]=useState([]);

        const hendleAddToCart=(tshirt)=>{

            const exists=cart.find(ts=>ts._id===tshirt._id)
            if(exists){
                toast('You have alredy added this t-shirt')
            }
            else{
                const newcart=[...cart, tshirt];
            setCart(newcart)
            }

            
        }
        const hendleRemoveFromCart=id=>{
            const remaining=cart.filter(ts=>ts._id !==id);
            setCart(remaining);
        }


    return (
        <div className=' home-container'>
            <div className='t-shirt-container'>
            {
                tshirts.map( tshirt=><Tshirt
                    key={tshirt._id}
                    tshirt={tshirt}
                    hendleAddToCart={hendleAddToCart}
                    >  
                    </Tshirt>)
                }
            </div>
           <div className='col-span-1'>
              <Cart 
              cart={cart}
              hendleRemoveFromCart={hendleRemoveFromCart}
              >

              </Cart>
           </div>
        </div>
    );
};

export default Home;