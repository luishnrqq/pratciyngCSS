import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex-container">
        <div  className="left-side-login">
          <h1>Bem vindo ao nosso site</h1>
          <img src="Users\luisa\Downloads\10248741-removebg-preview.png"  />
        </div>
        <div className="right-login">
          <h1>LOGIN</h1>
          <div className="info-input">
            <label  for="usuario">Usuário</label>
            <input type="text" placeholder="Usuário" />
          </div>
          <div className="info-input">
            <label  for="senha"  >Senha</label>
            <input type="password" placeholder="******" />
          </div>
          <button className="login-btn">Entrar</button>
        </div>
      </div>
    </main>
  );
}
