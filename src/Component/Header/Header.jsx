import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-center items-center text-xl bg-slate-100  h-[50px] gap-5 pl-5 '>
            <Link to="/">Home </Link>
            <Link to="/review">Review</Link>
            <Link to="/grendpa">Grendpa</Link>
            <Link to="/about">About </Link>          
            <Link to="/contact">contact</Link>
        </nav>
    );
};

export default Header;