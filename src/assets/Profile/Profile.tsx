import Navbar from '../../components/Navbar'
import './Profile.css'

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="loginContainer">
        <div className="loginContent">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder='Email' />
            <input type="password" placeholder='Senha'/>
            <button>Entrar</button>
          </form>
          <a href="">Criar Conta</a>
        </div>
      </div>
    </>
  )
}


