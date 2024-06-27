"use client";
import { useState } from "react";

export default function Home() {
  const [cadastroVisible, setCadastroVisible] = useState(false);

  const handleCadastroClick = () =>{
    setCadastroVisible(!cadastroVisible);
  }

  return (

    <div className="flex-container">
      <input type="checkbox"  id="chk"/>
      <div className="left-side-login">
        <h1>Bem vindo ao nosso site</h1>
      </div>
      <div className="right-login">
        <h1 >LOGIN</h1>
        <div className="info-input">
          <label for="usuario">Usuário</label>
          <input type="text" placeholder="Usuário" />
        </div>
        <div className="info-input">
          <label for="senha"  >Senha</label>
          <input type="password" placeholder="******" />
        </div>
        <button className="login-btn">Entrar</button>
        <button onClick={handleCadastroClick}>Cadastrar</button>
        <div className={cadastroVisible ? "cadstro-conatiner cadastro-container-active" : "cadastro-container"} >
          <label htmlFor="chk" aria-hidden="true"  >CADASTRO</label>
          <div className="info-input-register">
            <label>Nome completo</label>
            <input type="text" placeholder="Nome Completo" />
          </div>
          <div className="info-input-register">
            <label>Email</label>
            <input type="email" placeholder="E-mail" />
          </div>
          <div className="info-input-register">
            <label>Senha</label>
            <input type="password" placeholder="******" />
          </div>
          <div className="info-input-register">
            <label>Confirmar senha</label>
            <input type="password" placeholder="******" />
          </div>
          <div>
            <button className="login-btn">Cadastrar</button>
          </div>
        </div>
      </div>
    </div>

  );
}

