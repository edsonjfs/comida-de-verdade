import { Botao } from '../Botao/Botao'
import './Main.css'
import React from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

export const Main = () => {
  return (

    <main>
      <div>
        <Header />
        <img src='/img/comidadeverdade.jpg' className='img-container2' />
      </div>
      <div className='introducao'>
        <h1 className='titulo1'>QUEM SOMOS:</h1>
        <p>O Sítio Semente é uma das maiores referências em Sistemas Agroflorestais Sintrópicos do mundo, localizado em Brasília - DF. De base familiar, o Sítio Semente vem produzindo desde 2005 em áreas originalmente degradadas.
          Hoje são mais de 10 hectares de produção extremamente biodiversa que vão da horta à floresta com foco em plantas medicinais, aromáticas e café.
        </p>
        <div className='containerPng'><img src='./img/Mandarin-PNG-Image-HD.png' className='png' /></div>
        <div className='containerBotaoMain'>
          <Botao className='botaoMain' />
        </div>



        <div className="card-container">
          <div className="card">
            <div className="card-content">
              <img src='./img/flor.jpg' alt='imgem 1' />
              <p>Sítio Semente é uma das maiores referências em Sistemas Agroflorestais Sintrópicos do mundo, localizado em Brasília - DF. De base familiar, o Sítio Semente vem produzindo</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <img src='./img/flor.jpg' alt='imgem 2' />
              <p>Sítio Semente é uma das maiores referências em Sistemas Agroflorestais Sintrópicos do mundo, localizado em Brasília - DF. De base familiar, o Sítio Semente vem produzindo</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <img src='./img/flor.jpg' alt='imgem 3' />
              <p>Sítio Semente é uma das maiores referências em Sistemas Agroflorestais Sintrópicos do mundo, localizado em Brasília - DF. De base familiar, o Sítio Semente vem produzindo</p>
            </div>
          </div>
        </div>



        <div className='container'>
          <div className='Iniciativa'>
            <h2>SOBRE A INICIATIVA:</h2>
            <p>Escolhemos a empatia em vez da indiferença. Escolhemos fazer a diferença em vez de ficar parados e deixar o mundo passar por nós. Juntos, podemos construir um mundo mais justo e compassivo, onde o frio da indiferença não tenha mais lugar.</p>
          </div>
          <div className='Cesta'>
            <h2>O QUE VAI NA CESTA?</h2>
            <p>Nossa meta é entregar 10.000 kits com: moletons personalizados em parceria com a FutureBrand + kit higiene e em dias muito frios, sacos de dormir.</p>
          </div>
          <div className='containerpapayaPng'> <img src='/img/Papaya-PNG-HD-Image.png' className='papayaPng' /></div>
        </div> <br></br>
        <br></br>


      </div>
      <Footer />
    </main>

  )

}

export default Main;