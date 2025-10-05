import "./ReferencesBar.css"
import { dataScriptures } from "../../data/dataScriptures";
import { dataCitacao } from "../../data/dataCitacao";

export function openRefBar() {
    const referencesBar = document.querySelector('.reference-bar')
    { referencesBar && referencesBar.classList.add('open') }
}

export function closeRefBar() {
    const referencesBar = document.querySelector('.reference-bar')
    { referencesBar && referencesBar.classList.remove('open') }
}

export function openScripture(id: string) {
    openRefBar()
    const titulo = document.getElementById("titulo")
    const content = document.getElementById("references-content")
    const scripture = dataScriptures.filter(scripture => scripture.id === id)
    if(titulo && content) {
        titulo.innerHTML = scripture[0].titulo
        content.innerHTML = scripture[0].content
    }
}

export function openCitacao(id: string) {
    openRefBar()
    const titulo = document.getElementById("titulo")
    const content = document.getElementById("references-content")
    const citacao = dataCitacao.filter(citacao => citacao.id === id)
    if(titulo && content) {
        titulo.innerHTML = citacao[0].titulo
        content.innerHTML = citacao[0].content
    }
}

function ReferencesBar() {
    return(
        <div id="references-bar" className="reference-bar">
            <svg id="close-icon-ref" onClick={closeRefBar} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>

            <p id="titulo"></p>
            <div id="references-content">
                
            </div>
        </div>
    )
}

export default ReferencesBar;