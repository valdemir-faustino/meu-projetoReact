
import {useState} from 'react'
function Form(){
  function cadastrarUsuario(e){
    e.preventDefault()
    
    console.log(`Usuario ${name}, foi cadastrado com a senha ${password} e e_mail ${email}`)
  }
    const [name, setName] = useState()
    const [password, setPasssword] = useState()
    const [email, setEmail] = useState()
  
  return(
    <div>
      <h1>Meu Cadastro React:</h1>
      <h1>ZedoCanecoSite</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name"> Nome : </label>
          <input type="text" id="name" name="name" placeholder="Digete o seu nome" onChange={(e)=> setName(e.target.value)}/>
                             
          <div> 
          
          <label htmlFor="password"> Senha : </label>
          <input type="password" id="password" name="password" placeholder="Digete o sua senha" onChange={(e)=> setPasssword(e.target.value)}/>
          <div>
          <div>
        <label htmlFor="emali" > Email : </label>  
        <input type="email" id="email" name="email" placeholder="Digete o sue email" onChange={(e)=> setEmail(e.target.value)}/>
              
        </div>
        </div>
      <input type="submit" value="Cadastrar"/>
    </div> 
    </div>   
  </form>  
 
  </div>
  )
 }

export default Form
