import './Botao.css'
import React from 'react'
import { Link } from 'react-router-dom';

export const Botao =() => {
    return (
        <div className='Botao'>
            <Link to="/colabore">
                <button className='button-colabore'>COLABORE</button>
            </Link>
        </div>
    )

}
