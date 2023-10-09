import React, { useEffect, useState } from 'react';
import BlogItem from './BlogItem';

const Blogs = () => {

    const [ blogs, setBlogs]=useState([])  
    useEffect(()=>{
        fetch('/public/data.json')
        .then(res =>res.json())
        .then(data =>console.log(data))
    
    }, [])

    return (
        <div>
            <div className='mx-[100px]'>
                <div  className=' grid p-5 justify-center center lg:grid-cols-5 flex gap-4'>
                    <div className='col-span-4  bg-white'>
                       <div className=' p-3 bg-slate-200 text-center text-5xl font-bold'>
                                <h1> All Blogs </h1>
                       </div>
                    <div>
                        {
                            blogs.map( blog=> <BlogItem 
                              key={blog.id}
                                Items={blog}
                            >        
                         </BlogItem>)
                        }

                    </div>

                    </div>
                    <div  className='col-span-1 p-5 bg-green-100'>
                    <div>
                         <h1> Blog Qunatity: </h1>
                    </div>

                    </div>       
                </div>
            </div>
        </div>
    );
};

export default Blogs;