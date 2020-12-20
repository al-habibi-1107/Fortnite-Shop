import React, { useEffect, useState } from 'react';

import './Shop.css';
import Card from "./blocks/Card";


function Shop() {

    const [dailyItems, setDailyItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.com/v2/shop/br/combined');
        const items = await data.json();
          console.log(items.data.daily.entries);
        const dItem = items.data.daily.entries;
        setDailyItems(dItem);
    }



    return (
        <div className="body">
            <h1 className="daily-header">Get Your Daily Items Here</h1>
            <div className="daily-items">
                {dailyItems.map((item) => {
                    const items = item.items;
                    return items.map((innerItem) => {
                        return <Card key={innerItem.id} 
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