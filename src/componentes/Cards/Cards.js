import './Cards.css'
import React from 'react'

export const Cards = ({ image, title, description }) => {
    return (
        <div className='Cards'>
            <img src={image} alt={title} />
            <h2>{title}askflksjhf</h2>
            <p>{description}Lorem</p>
        </div>
    )

}
