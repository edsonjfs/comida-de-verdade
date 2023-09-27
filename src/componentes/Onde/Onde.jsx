import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import './Onde.css'
import React from 'react'


export const Onde = () => {
    return (
        <div>   <Header />
            <div className="container">
            <div className='row'>
                <div className='col'>
                    <p> Domingo, 17 de setembro de 2023, foi realizado uma entrega para o trajeto Parque Minas Gerais - Itamaraty. Neste,
                        percorremos 43 km, em uma atividade de 5 horas e 13 minutos de duração, onde começamos com satisfatória pontualidade as 8h02 e finalizamos o trabalho às 13h15.
                    </p>

                    <p>  74 pessoas, distribuidas em 16 famílias foram atendidas, sendo elas 46 adultos e 28 crianças.
                         Além disso conseguimos fornecer uma quantidade considerável de doações para o projeto do Robson, da paróquia São Luiz Gonzaga.
                    </p>

                    <p>
                        A diversidade de produtos estava alta, contamos com ovos, alface, brócolis, espinafre, couve, batata doce, banana,
                        mandioca, limão, abóbora, abobrinha, cebolinha, além de sabão liquido que foram adquiridos dos produtores Nalva, Fernando, Yumi, Furnas, Claudemir e Nivaldo
                    </p>
                </div>
            </div>
            </div>
            <Footer />

        </div>
    )
}

export default Onde;