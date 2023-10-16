import React from 'react';
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import Unty from '../Unty/Unty'
import './Grendpa.css'
const Grendpa = () => {

    const ring="(Diamond - this is Props)";
    return (
        <div className='grendpa'>
            <h1>Grendpa </h1>
            <section className='flex'>
                <Father ring={ring}></Father>
                <Uncle></Uncle>
                <Unty ring={ring}></Unty>
            </section>
        </div>
    );
};

export default Grendpa;