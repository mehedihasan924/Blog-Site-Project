import { data } from 'autoprefixer';
import React from 'react';

const BlogItem = ({Items}) => {
        const { img ,  title, admin_img, name}=Items
       
    return (
        <div>
            <div className='my-5'>
                <img className=' w-full h-[200px] ' src={img} alt="" />
                <h1 className=' text-2xl  mb-5 '> Title:{title}</h1>
                <div className=' flex justify-between '>
                   <span className='flex '> 
                   <img className='rounded-full mr-5 w-[50px] h-[50px]' src={admin_img} alt="" />
                       <div>
                           <h2> Name:{name}</h2>
                        </div>
                       <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </span> 
                    <span>
                    <p> Date: </p>
                    <button > add book mark </button>
                    </span>
                   
                </div>
              
            </div>
        </div>
    );
};

export default BlogItem;