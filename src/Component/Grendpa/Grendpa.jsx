import React, { createContext, useState } from 'react';
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import Unty from '../Unty/Unty'
import './Grendpa.css'


export const RingContext=createContext('Gold')
export const MoneyContext=createContext('Gold')
const Grendpa = () => {
       const ring="(Diamond - this is Props)";
       const [money, setMoney]=useState(0)
    return (
        <div className='grendpa'>
            <h1>Grendpa </h1>
            <p> Money: {money}</p>
 {/* Context API Use kore props patanu hoise "Brother" a */}
        <MoneyContext.Provider value={[money, setMoney]}> 
                <RingContext.Provider value='( Golden ring- this is props )'> 
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Unty ring={ring}></Unty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grendpa;

// 1 Creat context and export
// 2. Creat aProvider and pass Value
// 3. Use Context to recive