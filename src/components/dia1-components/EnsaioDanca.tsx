import { openCitacao } from "../references-bar/ReferencesBar";

function EnsaioDanca() {
    return(
        <>
            <h3>Ensaio de dança (opcional)</h3>
            <p>Essa é a última reunião da equipe antes do início da sessão. Chegue no horário e preste atenção em qualquer mudança na agenda, nas informações específicas da sessão e em outros avisos. Esperamos que você se sinta incentivado e animado para a conferência!</p>

            <p className="citacao">“Além de mostrar o caminho para os jovens pelo exemplo, nós os conduzimos quando compreendemos o coração deles e trilhamos com eles o caminho do evangelho. Para realmente compreender o coração deles, precisamos fazer mais do que apenas estar no mesmo lugar (...). Precisamos planejar e aproveitar momentos de ensino que deixem uma impressão marcante e duradoura na mente e no coração deles (...).</p>
            <p className="citacao">Para que nossas interações com os jovens realmente toquem o coração deles, temos que dar atenção a eles (...). O mais importante é que façamos perguntas, deixemos que falem, e depois, tenhamos a disposição de ouvir — sim, ouvir — e ouvir um pouco mais, com nossos ouvidos espirituais!”<a onClick={() => openCitacao("EnsaioDanca1")}>¹</a></p>
        </>
    )
}

export default EnsaioDanca;