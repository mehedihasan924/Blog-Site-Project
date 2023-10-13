import React, { useEffect, useState } from 'react';
import BlogItem from './BlogItem';
import { getTotal } from '../../Utilitys/fackDB';
import Cart from '../Cart/Cart';
const Blogs = () => {

    const [ blogs, setBlogs]=useState([])  
    useEffect(()=>{
        fetch('/public/data.json')
        .then(res =>res.json())
        .then(data =>setBlogs(data))
    
    }, [])

    const [cart, setCart]=useState([])

        const hendleAddTocart=( Items)=>{
            // console.log( Items)
            const newCart=[...cart, Items];
            setCart(newCart);
        }


        
    // const total=getTotal(blogs);
    // console.log(total)
    return (
        <div>
            <div className='mx-[70px]'>
                <div  className=' grid p-5 justify-center center lg:grid-cols-5 flex gap-4'>
                    <div className='col-span-4  bg-white'>
                       <div className=' p-3 bg-slate-200 text-center text-5xl font-bold'>
                                <h1> All Blogs {blogs.length}</h1>
                       </div>
                    <div className='p-5 bg-slate-200 mt-5'>
                        {
                            blogs.map( blog=> <BlogItem 
                              key={blog.id}
                                Items={blog}
                                hendleAddTocart={hendleAddTocart}
                            >        
                         </BlogItem>)
                        }

                    </div>

                    </div>
                    <div  className='col-span-1 p-5 bg-green-100 sticky top-0'>
                    <div>
                       <Cart cart={cart}></Cart>
                    </div>

                    </div>       
                </div>
            </div>
        </div>
    );
};

export default Blogs;