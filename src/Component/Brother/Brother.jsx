import React, { useContext } from 'react';
import { RingContext } from '../Grendpa/Grendpa';

const Brother = () => {
    const data=useContext(RingContext)
    return (
        <div>
            <h1>My Brother..</h1>
            <h1>{data}</h1>
        </div>
    );
};

export default Brother;