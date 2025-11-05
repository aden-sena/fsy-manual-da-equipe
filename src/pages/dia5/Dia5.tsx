import ApresentacaoSlides from "../../components/dia5-components/ApresentacaoSlides";
import AtividadeConecteSe from "../../components/dia5-components/AtividadeConecteSe";
import DevocionalLevarParaCasa from "../../components/dia5-components/DevocionalLevarParaCasa";
import Desjejum from "../../components/others/Desjejum";
import DevocionalMatutino from "../../components/others/DevocionalMatutino";
import ReuniaoCAC from "../../components/others/ReuniaoCAC";
import Schedule from "../../components/schedule/Schedule";

function Dia5() {
    return(
        <>
            <h1>5º Dia</h1>
            <h2>Camiseta da equipe do FSY</h2>

            <Schedule 
                horario="7h-8h;7h45-8h;8h-8h15;8h20-9h20;9h30-10h10;10h25-10h40;10h40-11h40;11h50-12h30;12h30-13h40;14h-15h"
                atividade='Acordar e preparar-se para o dia;Reunião de coordenadores assistentes/consultores;Devocional matutino dos participantes;Desjejum;Atividade "Conecte-se";Apresentação de Slides;Devocional "O que vou levar para casa";Refletir e Analisar em Companhia;Almoço/Arrumar as malas;Saída dos Participantes'
                idComponent="#;reuniao-cac;devocional-matutino;desjejum;conecte-se;apresentacao-slides;devocional-levar-para-casa;refletir-analisar-companhia;#;#"
                namePage="dia5"
            />

            <ReuniaoCAC />

            <DevocionalMatutino />

            <Desjejum />

            <AtividadeConecteSe />

            <ApresentacaoSlides />

            <DevocionalLevarParaCasa />

            <h3 id="refletir-analisar-companhia">Refletir e Analisar em companhia</h3>
            <p>Esse último refletir e analisar deve ser feito em companhia. Veja outros dias. Aproveitem o momento para trocar contatos e tirar fotos, refletir uma última vez sobre o que se comprometeram a mudar em suas vidas ao voltar para casa.</p>
        </>
    )
}

export default Dia5;