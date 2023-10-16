import React, { useContext } from 'react';
import Cusin from '../Cusin/Cusin';
import { MoneyContext } from '../Grendpa/Grendpa';
const Uncle = () => {
    const [money, setMoney]=useContext(MoneyContext)
    return (
        <div>
            <h1>Uncle</h1>
            <p> Money: {money}</p>
            <button className=' bg-slate-500 p-3 bordered'
            onClick={()=>setMoney(money+1000)}
            >Send Money </button>
            <section className='flex'>
                <Cusin> Akib </Cusin>
                <Cusin> Sakib</Cusin>
            </section>
        </div>
    );
};

export default Uncle;