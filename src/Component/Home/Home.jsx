import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const t_shart_data=useLoaderData()
    console.log(t_shart_data)
    return (
        <div>
            <h1> Home {t_shart_data.length}</h1>
        </div>
    );
};

export default Home;