import './Header.css'
import React from 'react'

export const Header =() => {
    return (
        <div className='containerHeader'>
            <header className='Header'>
            
                   <div className='img-container'> 
                   
                   <a href=""><img src='/img/comidavddbranco.png' alt='Logo da Header' className='img' /></a>
                   
                   </div>
            <div className='menu'>
            <nav>
                <ul>
                    <li>
                        <a href="">AGROECOLOGIA</a>
                    </li>
                    <li>
                        <a href=''>ONDE ENCONTRAR</a>
                    </li>
                    <li>
                        <a href=''>COLABORE</a>
                    </li>
            
                </ul>
            </nav>
            </div>
            </header>
        </div>
    )

}
