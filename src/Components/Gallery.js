import React, { useState } from 'react';
import Menu from './menu';
import MenuTab from './Tabs/MenuTab';
import ButtonTab from './Tabs/ButtonTab';

const allCatvalues = [...new Set(Menu.map((currItem)=>currItem.catagory)),"all"]

const Gallery = () => {
    const [items, setItems] = useState(Menu);
    const[catItems,setCatItems]=useState(allCatvalues)

    const filterItem = (ctgry) => {
        if(ctgry==="all"){
         setItems(Menu);
         return;
        }
        const newItems = Menu.filter((elem) => {
            return elem.catagory === ctgry;
        })
        setItems(newItems)
    }
    return (
        <>
            <div className="main-container">
                <h1>Order Your Favourite Dish</h1>
                <hr />
                <div className="container">
                    <ButtonTab filterItem={filterItem} catItems={catItems} />
                </div>
                <MenuTab items={items} />
            </div>
        </>
    )
}

export default Gallery
