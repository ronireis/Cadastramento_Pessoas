import React, { useState, useRef } from 'react';
import axios from "axios";


import People from '../../Asses/People.svg';
import Seta from '../../Asses/arrow.svg';

import {
  Conteiner,
  Image,
  ConteinerItens,
  H1,
  InputLabel,
  Input,
  Button,
} from './styles';

//JSX extrutura usada!

function App() {
  const [users, setUsers] = useState([]);
  const InputName = useRef();
  const InputAge = useRef();

    
  async function addNewusers() {
    const {data: response} = await axios.post("http://localhost:3001/users", {
      name: InputName.current.value,
      age: InputAge.current.value, 
    });
  

    setUsers([...users, response ]); // os ... ele serve para acrescentar um novo usuario sem danificar o codigo ou a aplicação
  
  }


  return <Conteiner>
    <Image alt="logo_imagem" src={People} />
    <ConteinerItens>

      <H1>Óla!</H1>

      <InputLabel>Nome</InputLabel>
      <Input ref={InputName} placeholder='Nome' />

      <InputLabel>Idade</InputLabel>
      <Input ref={InputAge} placeholder='Idade' />

      <Button to="/usuarios" onClick={addNewusers}> Cadastrar <img alt="seta" src={Seta} /></Button>

     
    </ConteinerItens>
  </Conteiner>


}

export default App;