import React from 'react'
import '../assets/styles/app.scss'
import Menu from '../components/Menu'


export const Home = () => {

    return (
        <div className="App">
            <Menu />
            <div className="App-content">
                <h2>CADASTRAR</h2>
                <form method="post">
                    <label htmlFor="name">Nome Completo:</label>
                    <input type="text" name="name" placeholder="Gustavo M de Oliveira" />
                    <label htmlFor="cpf">CPF:</label>
                    <input type="text" name="cpf" placeholder="000.000.000-00" />
                    <label htmlFor="phone">Telefone:</label>
                    <input type="text" name="phone" placeholder="DD-00000-0000" />
                    <label htmlFor="email">E-mail:</label>
                    <input type="text" name="email" placeholder="example@example.com" />
                    <button type="submit">Salvar</button>
                </form>
            </div>
        </div>
    );
}