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
            <h1 className='title-quem-somos'>QUEM SOMOS:</h1>
            <p>
            Comidada de Verdade é um grupo de voluntários que conecta pequenos produtores rurais às famílias em situação de vulnerabilidade e insegurança alimentar.
            Através da sua doação nós compramos alimentos saudáveis e de qualidade dos produtores locais e fazemos as entregas para as famílias de Ourinhos.
            Estamos sempre em contato com as equipes do CRASS e a Prefeitura que nos indicam as famílias que precisam da nossa ajuda.
            Gostou da iniciativa? Faça parte dessa corrente do bem e colabore também!! qualquer valor e ajuda é bem vinda! 
            </p>
            <div className='text-center'>
              <Botao className='btn btn-primary' />
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <h2 className='title-sobre-iniciativa'>SOBRE A INICIATIVA:</h2>
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
            <h2 className='title-que-vai-cesta'>O QUE VAI NA CESTA?</h2>
            <p>
              A nossa cesta é composta por alimentos e produtos que garantam nutrição e qualidade de vida para as famílias. 
              Nas últimas entregad foram abóboras, verduras como couve, alface, legumes, ovos, frutas, como banana, mexerica, limão, e produtos como sabão líquido caseiro. O conteúdo depende muito da época e o que 
              os produtores tem disponível no momento.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Main;
