import Footer from "../../src/componentes/footer/footer"
import Header from "../../src/componentes/header/header"

import "../detalhes/detalhes.css"

const Detalhes = () => {
    return (
        <>
        <Header />

        <main className="app-main">
            <h1></h1>
            <div className="memory-container">
                <div className="card-imagem"></div>
            </div>
            <div className="texto">
                <p></p>
            </div>
            <p>Carregando memória...</p>
        </main>
        
        <Footer />
    </>
    )
}

export default Detalhes;