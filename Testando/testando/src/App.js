//import logo from './logo.svg';
//import { useState } from 'react'
//import './App.css';
//import SeuNome from './components/SeuNome'
//import Saudacao from './components/Saudacao';
//import OutraLista from './components/OutraLista';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Challenge from './components/Challenge';
import UserDetails from './components/UserDetails';
import CarroDetalhes from './components/CarroDetalhes';
/*
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
*/
function App() {

  //const nome = "Douglas"

  //const meusItens = ['React' , 'Vue', 'Angular']

  //const [nome, setNome] = useState();
  const users = [
    { id: 1, nome: "João", idade: 15, profissao: "Estudante" },
    { id: 2, nome: "Douglas", idade: 25, profissao: "Analista de Sistemas" },
    { id: 3, nome: "Gabriel", idade: 17, profissao: "Motorista" },
    { id: 4, nome: "Fernando", idade: 36, profissao: "Empresário" }
  ]
  const carros = [
    { id: 1, marca: "Honda", modelo: 'Civic', cor: "Cinza" },
    { id: 2, marca: "Peugeot", modelo: '207', cor: "Verde"  },
    { id: 3, marca: "Mitsubishi", modelo: 'L200', cor: "Preto"  }
  ]

  return (

    /*<div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Paulo"/>
      <SayMyName nome="Fernando"/>
      <SayMyName nome={nome}/>
      <Pessoa 
          nome="Douglas"
          idade="25"
          profissao="Analista de Sistemas"
          foto="https://via.placeholder.com/150"
      />
      <List />
    </div>*/

    /*<div className="App">
      <h1>Testando Eventos</h1>
      <Evento/>
      <Form />
    </div>*/

    /*<div className="App">
      <h1>Renderização Condicional</h1>
      <Condicional />
    </div>*/

    /*<div className="App">
     <h1>Renderização de Listas</h1>
     <OutraLista itens={meusItens}/>
     <OutraLista itens={[]}/>
     </div>*/

    /*<div className="App">
      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/>
    </div>*/

    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <Challenge />

      {users.map((x) => { return <UserDetails key={x.id} nome={x.nome} idade={x.idade} profissao={x.profissao} /> })}

      <h1>Carros</h1>
      {carros.map((x) => { return <CarroDetalhes key={x.id} modelo={x.modelo} marca={x.marca} cor={x.cor} /> })}

      <Footer />
    </Router>

  );
}

export default App;
