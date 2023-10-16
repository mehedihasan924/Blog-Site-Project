import React from 'react';
import Cusin from '../Cusin/Cusin';
const Unty = ({ring}) => {
    return (
        <div>
            <h1>Unty</h1>
            
            <section className=' flex'>
                <Cusin> Arfas</Cusin>
                <Cusin ring={ring}hasFriend={true}> Nabil</Cusin>
            </section>
        </div>
    );
};

export default Unty;