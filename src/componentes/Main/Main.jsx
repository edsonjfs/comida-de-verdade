import { Botao } from '../Botao/Botao';
import './Main.css';
import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const Main = () => {
  return (
    <main>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1 className='titulo1'>QUEM SOMOS:</h1>
            <p>
              O Sítio Semente é uma das maiores referências em Sistemas
              Agroflorestais Sintrópicos do mundo, localizado em Brasília - DF.
              De base familiar, o Sítio Semente vem produzindo desde 2005 em
              áreas originalmente degradadas. Hoje são mais de 10 hectares de
              produção extremamente biodiversa que vão da horta à floresta com
              foco em plantas medicinais, aromáticas e café.
            </p>
            <div className='text-center'>
              <Botao className='btn btn-primary' />
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <h2>SOBRE A INICIATIVA:</h2>
            <p>
              Escolhemos a empatia em vez da indiferença. Escolhemos fazer a
              diferença em vez de ficar parados e deixar o mundo passar por
              nós. Juntos, podemos construir um mundo mais justo e compassivo,
              onde o frio da indiferença não tenha mais lugar.
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <h2>O QUE VAI NA CESTA?</h2>
            <p>
              Nossa meta é entregar 10.000 kits com: moletons personalizados em
              parceria com a FutureBrand + kit higiene e em dias muito frios,
              sacos de dormir.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Main;
