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
          <p className="chave-pix">Chave Pix:</p>
          <p>comidadeverdadeourinhos@gmail.com</p>
          <p>Nome : July Yukie Abe de Lima</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Colabore;
