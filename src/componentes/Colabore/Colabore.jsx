import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import './Colabore.css';

export const Colabore = () => {
  return (
    <div>
      <Header />
      <div className="card">
        <div className="card-content">
          <p>Dados da conta bancária</p>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <p>Prefere doar por pix?
            Dados
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <p>Deseja receber um lembrete mensal para contribuir com o projeto?</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Colabore;
