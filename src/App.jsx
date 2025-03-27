import CriarMemoria from "../pages/criar-memoria/Criar-memoria"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detalhes from "../pages/detalhes/Detalhes"
import Home from "../pages/home/index"
import "../src/assets/styles/global.css"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/criar" element={<CriarMemoria />}/>
        <Route path="/detalhes" element={<Detalhes />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
