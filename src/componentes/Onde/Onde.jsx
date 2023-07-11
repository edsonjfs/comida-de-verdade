import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import './Onde.css'
import React from 'react' 


export const Onde = () => {
    return(
     <div>   <Header/>
    <div className="card-container2">
          <div className="card2">
            <div className="card-content2">
              <img src='./img/flor.jpg' alt='imgem 1' />
              <p>Sítio Semente é uma das maiores referências em Sistemas Agroflorestais Sintrópicos do mundo, localizado em Brasília - DF. De base familiar, o Sítio Semente vem produzindo</p>
            </div>
          </div>
          <div className="card2">
            <div className="card-content2">
              <img src='./img/flor.jpg' alt='imgem 2' />
              <p>Sítio Semente é uma das maiores referências em Sistemas Agroflorestais Sintrópicos do mundo, localizado em Brasília - DF. De base familiar, o Sítio Semente vem produzindo</p>
            </div>
          </div>
          <div className="card2">
            <div className="card-content2">
              <img src='./img/flor.jpg' alt='imgem 3' />
              <p>Sítio Semente é uma das maiores referências em Sistemas Agroflorestais Sintrópicos do mundo, localizado em Brasília - DF. De base familiar, o Sítio Semente vem produzindo</p>
            </div>
          </div>
        </div>
<Footer/>

</div>
    )
}

export default Onde;