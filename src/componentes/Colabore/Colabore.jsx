import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import CopyToClipboard from 'react-copy-to-clipboard';
import './Colabore.css';

export const Colabore = () => {
  const chavePix = 'comidadeverdadeourinhos@gmail.com';

  return (
    <div>
      <Header />
      <div className="card">
        <div className="card-content">
        <div className="button-container"> {/* Container para centralizar o botão */}
          <p className="chave-pix">Chave Pix:</p>
            <CopyToClipboard text={chavePix}>
              <button className="copiarChavePix">Copiar Chave Pix</button>
            </CopyToClipboard>
          </div>
          <p>{chavePix}</p>
          <p>Nome : July Yukie Abe de Lima</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Colabore;
