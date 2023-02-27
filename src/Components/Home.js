import React, { useEffect, useState } from 'react'
import { Swiggy_Main_Url } from '../constants'
import RetaurantCard from './RetaurantCard';

const Home = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        getData()
    }, [])


    const getData = async () => {
        const data = await fetch(Swiggy_Main_Url);
        const json = await data.json();
        console.log(json.data.cards[2].data.data.cards.map(x => x.data));
        const apiData = json.data.cards[2].data.data.cards.map(x => x.data);
        setData(apiData);
    }

    if (data.length === 0 || data === undefined) {
        return <>No data found</>
    }
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '4px', padding: '4px' }}>
            {data.map(x => <RetaurantCard {...x} />)}
        </div>
    )
}

export default Home