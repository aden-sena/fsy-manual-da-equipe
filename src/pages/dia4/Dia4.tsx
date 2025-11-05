import AtividadeRapazesMocas from "../../components/dia4-components/atividade-rapazes-mocas/AtividadeRapazesMocas";
import ContagemNoturna4 from "../../components/dia4-components/ContagemNortuna4";
import DevocionalVespertinoCasalDiretor from "../../components/dia4-components/DevocionalVespertinoCasalDiretor";
import EstudoEvangelho from "../../components/dia4-components/estudo-evangelho/EstudoEvangelho";
import ProgramaMusicalDevocionalNorturno from "../../components/dia4-components/ProgramaMusicalDevocionalNoturno";
import ReuniaoTestemunho from "../../components/dia4-components/ReuniaoTestemunho";
import ShowVariedades from "../../components/dia4-components/ShowVariedades";
import ApagarLuzes from "../../components/others/ApagarLuzes";
import Desjejum from "../../components/others/Desjejum";
import DevocionalMatutino from "../../components/others/DevocionalMatutino";
import HoraSilencio from "../../components/others/HoraSilencio";
import ReuniaoNoturnaCCA from "../../components/others/ReuniaoNoturnaCCA";
import Schedule from "../../components/schedule/Schedule";

function Dia4() {
    return(
        <>
            <h1>4º Dia</h1>
            <h2>Manhã: Camiseta da equipe do FSY; Tarde e noite: roupa de domingo</h2>

            <Schedule 
                horario="7h–8h;7h45–8h;8h–8h15;8h15–9h15;9h25–9h–45;10h–11h;11h10–12h30;12h40–14h;14h–15h;14h–15h;15h20–16h20;15h20–16h20;16h30–17h50;18h–19h;19h10–20h20;20h30–21h30;21h40–22h;22h–22h30;22h40;22h50–23h;23h10"
                atividade='Acordar e se preparar para o dia;Reunião de coordenadores assistentes/consultores;Devocional matutino dos participantes;Desjejum;Estudo do "Vem, e segue-Me";Ensaio para o Show de Variedades/Tempo Livre;Show de Variedades;Almoço / Trocar para roupa de domingo;Serão vespertino do Casal Diretor para os rapazes / Ensaio para o medley do FSY;Atividade "A Família: Proclamação ao Mundo" - Moças;Serão vespertino do Casal Diretor para as moças / Ensaio para o medley do FSY;Atividade "A Família: Proclamação ao Mundo" - Rapazes;Ensaio geral do programa musical/Tempo Livre (para os jovens não envolvidos no ensaio);Jantar;Programa Musical e Devocional Casal Diretor + Medley;Convite à reverência + Reunião de Testemunhos;Refletir e Analisar;Contagem dos participantes | Hora do silêncio e preparação para o devocional e para dormir;Apagar as luzes;Reunião de coordenadores/coordenadores assistentes;Staff deve se recolher'
                idComponent="#;reuniao-cac;devocional-matutino;desjejum;estudo-evangelho;#;show-variedades;#;devocional-vespertino-cd;AtividadeRapazesMocas;devocional-vespertino-cd;AtividadeRapazesMocas;#;#;programa-musical-devocional-nortuno;reuniao-testemunho;refletir-analisar;contagem-noturna4;#;reuniao-noturna-cca;#"
                namePage="dia4"
            />

            <div id="reuniao-cac">
                <h3>Reunião de Coordenadores Assistentes e Consultores</h3>

                <h4>Consultores</h4>
                <p>Venha vestido e pronto para sair, pois você não terá tempo de terminar de se preparar mais tarde. Comece o dia orando juntos. Ouça atentamente os avisos e as instruções.</p>

                <h4>Coordenadores Assistentes</h4>
                <p>As reuniões da manhã são oportunidades para fortalecer seus consultores. Use esse tempo com sabedoria. Ajude-os a começar bem o dia com mensagens que sejam motivadoras, inspiradoras e relevantes para suas necessidades.</p>

                <p><b>Programação sugerida</b></p>
                <ul>
                    <li>Música:</li>
                    <li>Oração de abertura:</li>
                    <li>Pensamento espiritual:</li>
                    <li>Converse sobre qualquer necessidade ou perguntas que os consultores tenham</li>
                    <li>Avisos específicos da sessão</li>
                    <li>Observações</li>
                    <li>Locais da atividade dos rapazes e das moças</li>
                    <li>Debate sobre reverência e testemunho</li>
                    <li>Instruções sobre o show de variedades</li>
                    <li>Instruções para o programa musical</li>
                    <li>Oração de encerramento:</li>
                </ul>
            </div>

            <DevocionalMatutino />

            <Desjejum />
            <p><b>Avisos sugeridos</b></p>
            <ul>
                <li>Lembre os participantes do show de variedades de trazer consigo todos os acessórios e fantasias para o ensaio final.</li>
                <li>Dê qualquer outra instrução adicional para o ensaio final do show de variedades.</li>
            </ul>

            <EstudoEvangelho />

            <ShowVariedades />

            <DevocionalVespertinoCasalDiretor />

            <AtividadeRapazesMocas />

            <ProgramaMusicalDevocionalNorturno />

            <ReuniaoTestemunho />

            <h3 id="refletir-analisar">Refletir e Analisar</h3>
            <h4>Consultor</h4>
            <p>Dirija o debate Refletir e Analisar e dê os últimos anuncios ou lembretes aos seus jovens.</p>
            <p>Orem juntos.</p>

            <ContagemNoturna4 />

            <HoraSilencio />

            <ApagarLuzes />

            <ReuniaoNoturnaCCA />
        </>
    )
}

export default Dia4;