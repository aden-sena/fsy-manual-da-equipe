import { openCitacao } from "../../components/references-bar/ReferencesBar";

function Proposito() {
    return(
        <>
            <h1>Propósito do Manual da Equipe</h1>
            <p>Este manual fornece habilidades de ensino e instruções operacionais para orientá-lo a realizar uma conferência FSY eficaz. Escreva seu nome e suas informações sobre a sessão nas linhas fornecidas e mantenha seu manual com você ao longo da conferência. Use-o como referência para ajudá-lo a cumprir seus dever e para se lembrar do que aprendeu e ensinou no FSY.</p>

            <h2>Sugestões de como usar o manual</h2>
            <ul>
                <li>Registre coisas importantes que você vier a aprender com outros membros da  equipe do FSY e, o mais importante, o que você aprender com o Espírito.</li>
                <li>Escreva suas metas, seus pensamentos, suas impressões e seu testemunho do evangelho de Jesus Cristo.</li>
                <li>Faça anotações durante as atividades para ajudá-lo a se lembrar dos princípios e das perguntas que gostaria de debater com os jovens durante o estudo do evangelho, nas atividades “Refletir e analisar” e “O que vou levar para casa” ou em outros momentos.</li>
                <li>Muitas lições e atividades terão como base as informações presentes em seu manual. Com suas anotações registradas, seu manual se torna um recurso importante de ensino e aprendizado que você poderá consultar.</li>
            </ul>

            <p className="citacao">“A Primeira Presidência e os Doze estão unidos ao endossar esses esforços para fortalecer os jovens. Ah!Como os amamos e oramos por eles! Vocês são a ‘<a onClick={() => openCitacao("hino182")}>juventude da promessa, esperança de Sião</a>’. Expressamos nossa completa confiança em nossos jovens e nossa gratidão a eles.”<a onClick={() => openCitacao("proposito1")}>¹</a></p>
            <p></p>
        </>
    )
}

export default Proposito;