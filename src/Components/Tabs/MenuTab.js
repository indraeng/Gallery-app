import React from 'react'

const MenuTab = ({items}) => {
    return (
        <>
            <div className="total-menu">
                {
                    items.map((elem) => {
                        const { id, image, name, catagory, price, description } = elem;
                        return (
                            <div className="card" key={id}>
                                <div className="image">
                                    <img src={image} alt={name} />
                                </div>
                                <div className="other">
                                    <h3>{name}</h3>
                                    <p>{description}</p>
                                    <div className="pay">
                                        <p>Price : {price}</p>
                                        <button className='order-btn'>Order now</button>
                                    </div>
                                    <p>This food is very testy</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default MenuTab
