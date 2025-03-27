import { useEffect, useState } from "react"
import Footer from "../../src/componentes/footer/footer"
import Header from "../../src/componentes/header/header"

import "../home/home.css"

const Home = () => {

const [memorias, setMemorias] = useState([]);

useEffect(() => {
    const carregarMemorias = async () => {
        try {
            const response = await fetch("http://localhost:3000/memorias");
            const dados = await response.json();
            console.log("Memorias carregadas: ", dados);
            setMemorias(dados);
        } catch (error) {
            console.error("Erro ao carregar memorias: ", error);
        }
    }

    carregarMemorias();
}, [])

    return (<>
        <Header />
        <main className="app-main">
            <h1>Meus momentos</h1>
            <div className="cards-container">
                {memorias.map((memoria) => (
                    <div className="card">
                        <div className="imagem"></div>
                        <h2></h2>
                        <p></p>
                    </div>
                ))}
                <a href="#" className="card-link">
                </a>
                <div className="card">
                    <a href="#">
                        <div className="add"></div>
                        <h2>Adicionar memória</h2>
                        <p>Clique aqui para adicionar mais memórias.</p>
                    </a>
                </div>
            </div>
        </main>
        <Footer />
    </>)
}

export default Home;