import React from 'react'

const ButtonTab = ({ filterItem, catItems }) => {
    return (
        <>
            <div className='btn-container'>
                {
                    catItems.map((curElm,idx) => <button className='btn' key={idx} onClick={() => filterItem(curElm)}>{curElm}</button>)
                }
            </div>
        </>
    )
}

export default ButtonTab
