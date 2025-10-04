import ShowComponent from "../modal/ShowComponent";

function DevocionalMatutino() {
    return(
        <>
            <h3 id="devocional-matutino">Devocional matutino dos participantes</h3>

            <h4>Consultores</h4>
            <p>Durante o devocional, os seus participantes terão a oportunidade de ensinar e aprender com os membros do grupo deles. As designações para todos os devocionais dos participantes podem ser feitas durante a atividade “<ShowComponent nameComponent="ConhecaConsultor" />” ou, a cada dia, ao fim de cada devocional, o consultor designa o jovem responsável para a devocional do dia seguinte.</p>
            <p>Depois do devocional, dê os avisos necessários. Revise rapidamente as atividades do dia e certifique-se de que os participantes saibam os lugares para onde devem se dirigir e quando devem chegar lá.</p>

            <p><b>Avisos sugeridos</b></p>
            <ul>
                <li>Diga a seus jovens onde eles devem se reunir depois do almoço para a contagem dos participantes.</li>
                <li>Incentive os jovens a procurar e registrar ideias para compartilhar durante a atividade “<ShowComponent nameComponent="RefletirAnalisar" />”.</li>
            </ul>
        </>
    )
}

export default DevocionalMatutino;