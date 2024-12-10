import React, { useState } from "react";
import "./App.css";


const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="app-container">
      <header className="header">
        <img src="/logo_tce_.png" alt="Logo do Portal" className="logo" /> {/* Caminho relativo */}
        <h1>Portal da Transparência dos Municípios</h1>
        <p>Escolha abaixo o que você deseja saber</p>
      </header>

      <section className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </section>

      <main className="main-content">
        <section className="cards-container">
          <div className="card">
            <h2>Município</h2>
            <p>
              Dados enviados pelo município através do Sistema de Informações
              Municipais (SIM).
            </p>
            <button className="action-button">Iniciar</button>
          </div>

          <div className="card">
            <h2>TCE</h2>
            <p>Tribunal de Contas do Estado do Ceará.</p>
            <button className="action-button">Iniciar</button>
          </div>

          <div className="card">
            <h2>Fornecedores</h2>
            <p>Consulta de fornecedores cadastrados.</p>
            <button className="action-button">Iniciar</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 Tribunal de Contas do Estado do Ceará</p>
      </footer>
    </div>
  );
};

export default App;
