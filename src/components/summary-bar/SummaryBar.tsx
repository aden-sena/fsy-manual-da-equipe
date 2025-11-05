import { NavLink, useLocation } from "react-router-dom"
import "./SummaryBar.css"
import { useEffect } from "react"

export function openSummaryBar() {
    const summaryBar = document.querySelector('.summary-bar')
    { summaryBar && summaryBar.classList.add('open') }
}

export function closeSummaryBar() {
    const summaryBar = document.querySelector('.summary-bar')
    { summaryBar && summaryBar.classList.remove('open') }
}

function SummaryBar() {
    const { pathname } = useLocation();
    const content = document.getElementById("content")

  useEffect(() => {
    // Rola para o topo quando o pathname muda
    { content && content.scrollTo(0, 0)};
  }, [pathname]);

    return(
        <div id="summary-bar" className="summary-bar">
            <svg id="close-icon-summary" onClick={closeSummaryBar} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            <p id="summary-title">Sumário</p>
            <ul>
                <NavLink to={"/"}><li>Bem-vindo à conferência FSY</li></NavLink>
                <NavLink to={"/objetivo"}><li>Objetivo</li></NavLink>
                <NavLink to={"/proposito"}><li>Propósito</li></NavLink>
                <NavLink to={"/seguranca"}><li>Segurança</li></NavLink>
                <NavLink to={"/preparacao-e-planejamento"}><li>Preparação e Planejamento</li></NavLink>
                <NavLink to={"/instrucoes"}><li>Instruções</li></NavLink>
                <NavLink to={"/dia1"}><li>Dia 1</li></NavLink>
                <NavLink to={"/dia2"}><li>Dia 2</li></NavLink>
                <NavLink to={"/dia3"}><li>Dia 3</li></NavLink>
                <NavLink to={"/dia4"}><li>Dia 4</li></NavLink>
            </ul>
        </div>
    )
}

export default SummaryBar;
