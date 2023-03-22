import React, { useState, useEffect} from 'react';
import axios from "axios";


import Avatar from '../../Asses/avatar.svg';
import Seta from '../../Asses/arrow.svg';
import Lixo from '../../Asses/lixeira.svg';

import {
  Conteiner,
  Image,
  ConteinerItens,
  H1,
  Button,
  User
} from './styles';

//JSX extrutura usada!

function Users() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    async function EffectUser () {
      const {data: Usersnew} = await axios.get("http://localhost:3001/users");

      setUsers(Usersnew)

      
    }

    EffectUser();
  }, [users]) 

  // Reack Hook -> UseEfect (efeito ao contrario )
  // quando um estado é modificado o useEfect é alterado 

  async function deleteUser(userid) {
    await axios.delete(`http://localhost:3001/users/${userid}`) // deletando usuario do back-end

    const newUser = users.filter((user) => user.id !== userid); // deletando usuario do front-end

    setUsers(newUser)
  }

  return <Conteiner>
    <Image alt="logo_imagem" src={Avatar} />
    <ConteinerItens>

      <H1>Usuários</H1>

     
      <ul>
        {users.map((user) => (
          <User key={user.id}>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <button onClick={() => deleteUser(user.id)}>
              <img src={Lixo} alt="lata-de-lixo" />
            </button>

          </User>
        ))}
      </ul>

      <Button to="/" > <img alt="seta" src={Seta} /> Voltar </Button>

    </ConteinerItens>
  </Conteiner>


}

export default Users;