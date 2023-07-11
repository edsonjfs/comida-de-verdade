import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import React from 'react' 


export const Onde = () => {
    return(
    
    <div className='container'>
    <div className='Iniciativa'>
        <h2>SOBRE A INICIATIVA:</h2>
        <p>Escolhemos a empatia em vez da indiferença. Escolhemos fazer a diferença em vez de ficar parados e deixar o mundo passar por nós. Juntos, podemos construir um mundo mais justo e compassivo, onde o frio da indiferença não tenha mais lugar.</p>
    </div>
    <div className='Cesta'>
        <h2>O QUE VAI NA CESTA?</h2>
        <p>Nossa meta é entregar 10.000 kits com: moletons personalizados em parceria com a FutureBrand + kit higiene e em dias muito frios, sacos de dormir.</p>
    </div>
    <div className='containerpapayaPng'> <img src='/img/Papaya-PNG-HD-Image.png' className='papayaPng'/></div>
</div>

    )
}

export default Onde;