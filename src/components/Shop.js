import React, { useEffect, useState } from 'react';

import './Shop.css';
import Card from "./blocks/Card";


function Shop() {

    const [dailyItems, setDailyItems] = useState([]);
    const [featuredItems,setFeaturedItems] = useState([]);

    useEffect(() => {
        fetchItems();
        fetchFeatured();
    }, []);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.com/v2/shop/br/combined');
        const items = await data.json();
        //   console.log(items.data);
        const dItem = items.data.daily.entries;
        setDailyItems(dItem);
    }

    const fetchFeatured = async()=>{
        const data = await fetch('https://fortnite-api.com/v2/shop/br/combined');
        const items = await data.json();
        console.log(items.data.featured.entries);
        const fItem = items.data.featured.entries;
        setFeaturedItems(fItem);
    }



    return (
        <div className="body">
            <h1 className="daily-header">Get Your Daily Items Here</h1>
            <div className="daily-items">
                {dailyItems.map((item) => {
                    const items = item.items;
                    return items.map((innerItem) => {
                        return <Card key={innerItem.id} 
                        id={innerItem.id}
                        title={innerItem.name} 
                        desc={innerItem.description}
                        img={innerItem.images.icon} />;
                    })
                })}
            </div>
            <div className='banner'>
                <img src='https://i.redd.it/vk5qc9dhbxo01.jpg' alt='img'/>
            </div>
            <h1 className="daily-header">Get Your Featured Items Here</h1>
            <div className="daily-items">
                {featuredItems.map((item) => {
                    const items = item.items;
                    return items.map((innerItem) => {
                        return <Card key={innerItem.id} 
                        id={innerItem.id}
                        title={innerItem.name} 
                        desc={innerItem.description}
                        img={innerItem.images.icon} />;
                    })
                })}
            </div>
        </div>
    );

}

export default Shop;