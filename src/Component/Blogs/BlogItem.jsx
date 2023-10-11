import { data } from 'autoprefixer';
import React from 'react';
import { addToDb, removeFromDb } from '../../Utilitys/fackDB';
const BlogItem = ({Items}) => {
        const {id, img ,  title, admin_img, name}=Items
  
        const addToCart=( id)=>{
            addToDb(id)
        }
        const removeFromCart=(id)=>{
           removeFromDb(id)
        }

    //Cart Item add system to local database****    
        // const addTocart=(id)=>{
        //     console.log("add Items", id);
        //     localStorage.setItem(id, 1)
        // }
        // const addTocartWithParamiter=()=>addTocart(id)
        
    return (
        <div>
            <div className='my-5 border border-black p-3 mb-4' >
                <img className=' w-full h-[200px] ' src={img} alt="" />
                <h1 className=' text-2xl  mb-5 '> Title:{title}</h1>
                <div className=' flex justify-between '>
                   <span className='flex '> 
                   <img className='rounded-full mr-5 w-[50px] h-[50px]' src={admin_img} alt="" />
                       <div>
                           <h1 className=' text-xl '> Name:{name}</h1>
                           <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>                             
                    </span> 
                    <span>
                    <p> Date: </p>
                    {/* <button onClick={addTocartWithParamiter} > add book mark </button> */}
                    <button className='bg-slate-100 mx-5 p-2' onClick={()=>addToCart(id)} > add book mark </button>
                    <button className='bg-slate-100 mx-5 p-2' onClick={()=>removeFromCart(id)} > Remove Item </button>
                    </span>
                   
                </div> 
              
            </div>
        </div>
    );
};

export default BlogItem;