import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import TitleBar from './components/title-bar/TitleBar.tsx'
import ReferencesBar, { closeRefBar } from './components/references-bar/ReferencesBar.tsx'
import SummaryBar, { closeSummaryBar } from './components/summary-bar/SummaryBar.tsx'
import Home from './pages/home/Home.tsx'
import Objetivo from './pages/objetivo/Objetivo.tsx'
import Proposito from './pages/proposito/Proposito.tsx'
import Seguranca from './pages/seguranca/Seguranca.tsx'
import PreparacaoEPlanejamento from './pages/preparacao-e-planejamento/PreparacaoEPlanejamento.tsx'
import Instrucoes from './pages/instrucoes/Instrucoes.tsx'
import Dia1 from './pages/dia1/Dia1.tsx'
import Dia2 from './pages/dia2/Dia2.tsx'
import Dia3 from './pages/dia3/Dia3.tsx'
import ScrollTopButton from './components/scroll-top-button/ScrollTopButton.tsx'

function App() {
  let isRefOpen = true
    
  function closeBarsPhone() {
    const referencesBar = document.querySelector('.reference-bar')
    const closeRefButton = document.getElementById('close-icon-ref')
    const mediaQuery = window.matchMedia('(max-width: 1200px)')

    if(mediaQuery.matches) {
      closeSummaryBar()

      if(referencesBar && referencesBar.classList.contains('open') && isRefOpen) {
        isRefOpen = false
      }else {
        closeRefBar()
        isRefOpen = true
      }
      closeRefButton && closeRefButton.addEventListener('click', () => isRefOpen = true)
    }
  }

  const handleSwipe = useSwipeable({
      onSwipedLeft: () => {
        closeSummaryBar()
      },
      onSwipedRight: () => {
        closeRefBar()
        isRefOpen = true
      }
    })

  return (
    <div {...handleSwipe} id="app-container">
      <TitleBar />

      <ReferencesBar />
      
        <HashRouter>
          <SummaryBar />
          <div id="content" onClick={closeBarsPhone}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/objetivo" element={<Objetivo />} />
            <Route path="/proposito" element={<Proposito />} />
            <Route path="/seguranca" element={<Seguranca />} />
            <Route path="/preparacao-e-planejamento" element={<PreparacaoEPlanejamento />} />
            <Route path="/instrucoes" element={<Instrucoes />} />
            <Route path="/dia1" element={<Dia1 />} />
            <Route path="/dia2" element={<Dia2 />} />
            <Route path="/dia3" element={<Dia3 />} />
          </Routes>
          </div>
        </HashRouter>

        <ScrollTopButton />
    </div>
  )
}

export default App
