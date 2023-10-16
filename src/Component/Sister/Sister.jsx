import React, { useContext } from 'react';
import { MoneyContext } from '../Grendpa/Grendpa';

const Sister = () => {
    const [money] =useContext(MoneyContext)
    return (
        <div>
            <h1>she is my sister</h1>
            <p> Money:{money}</p>
        </div>
    );
};

export default Sister;