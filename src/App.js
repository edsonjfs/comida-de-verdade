import './App.css';
import { Header } from './componentes/Header/Header';
import { Footer } from './componentes/Footer/Footer'; 
import { Main } from './componentes/Main/Main';
import {Botao} from './componentes/Botao/Botao';
import { Cards } from './componentes/Cards/Cards';

function App() {
  return (
    <div>

      <Header/>
      <Main/>
      <Botao/>
      <Cards/>
      <Footer/>
   </div>
  );
}

export default App;
