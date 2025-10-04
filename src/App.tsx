import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home.tsx'
import TitleBar from './components/title-bar/TitleBar.tsx'
import Objetivo from './pages/objetivo/Objetivo.tsx'
import Proposito from './pages/proposito/Proposito.tsx'
import Seguranca from './pages/seguranca/Seguranca.tsx'
import PreparacaoEPlanejamento from './pages/preparacao-e-planejamento/PreparacaoEPlanejamento.tsx'
import Instrucoes from './pages/instrucoes/Instrucoes.tsx'
import Dia1 from './pages/dia1/Dia1.tsx'
import ReferencesBar from './components/references-bar/ReferencesBar.tsx'
import ScrollTopButton from './components/scroll-top-button/ScrollTopButton.tsx'
import Dia2 from './pages/dia2/Dia2.tsx'
import SummaryBar, { closeSummaryBar } from './components/summary-bar/SummaryBar.tsx'

function App() {
  function closeSummaryPhone() {
    const content = document.getElementById('content')
    const referencesBar = document.getElementById('references-bar')
    const mediaQuery = window.matchMedia('(max-width: 1100px)')

    if(mediaQuery.matches) {
      { content && content.addEventListener('click', closeSummaryBar) }
      { referencesBar && referencesBar.addEventListener('click', closeSummaryBar) }
    }
    
  }

  return (
    <div id="app-container">
      <TitleBar />

      <ReferencesBar />
      
      <div id="content" onClick={closeSummaryPhone}>
        <BrowserRouter basename="/fsy-manual-da-equipe">
          <SummaryBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/objetivo" element={<Objetivo />} />
            <Route path="/proposito" element={<Proposito />} />
            <Route path="/seguranca" element={<Seguranca />} />
            <Route path="/preparacao-e-planejamento" element={<PreparacaoEPlanejamento />} />
            <Route path="/instrucoes" element={<Instrucoes />} />
            <Route path="/dia1" element={<Dia1 />} />
            <Route path="/dia2" element={<Dia2 />} />

            <Route path="/*" element={<Home />} />
          </Routes>
        </BrowserRouter>

        <ScrollTopButton />
      </div>
    </div>
  )
}

export default App
