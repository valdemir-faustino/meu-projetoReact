import React, { useState } from 'react';
import db from './firebase';



function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('usuarios').add({
      name: name,
      email: email,
      phone: phone
    })
    .then(() => {
      setName('');
      setEmail('');
      setName('');
      alert('Usuário adicionado com sucesso!');
    })
    .catch((error) => {
      console.error('Erro ao adicionar usuário:', error);
    });
  };
  
  return (
    <div className="App">
      <h1>Formulário</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />          
          <input
            type="Text"
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
  
  export default App;
  