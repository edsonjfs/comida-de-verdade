import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Main from "./componentes/Main/Main"
import {Botao} from './componentes/Botao/Botao';
import {Onde} from './componentes/Onde encontrar';
import App from "./App";


const AppRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path = "/index" Component={Main}/>
                <Route path="/colabore" Component={Botao}/>
                <Route path="/ondeencontrar" Component={Onde}/>
            </Routes>
        </Router>
       
    )
}



export default AppRoute;