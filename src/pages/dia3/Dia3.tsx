import Baile from "../../components/dia3-components/Baile"
import ContagemNoturna3 from "../../components/dia3-components/ContagemNorturna3"
import EducacaoAutossuficiencia from "../../components/dia3-components/EducacaoAutossuficiencia"
import FSYHumano from "../../components/dia3-components/FSYHumano"
import ManhaJogos from "../../components/dia3-components/ManhaJogos"
import NormasEtiquetasBaile from "../../components/dia3-components/NormasEtiquetasBaile"
import TesteShowVariedades from "../../components/dia3-components/TesteShowVariedades"
import ViverEvangelho from "../../components/dia3-components/viver-evangelho/ViverEvangelho"
import Almoco from "../../components/others/Almoco"
import Desjejum from "../../components/others/Desjejum"
import DevocionalMatutino from "../../components/others/DevocionalMatutino"
import EnsaioProgramaMusical from "../../components/others/EnsaioProgramaMusical"
import EstudoVemESegueMe from "../../components/others/estudo-vem-e-segue-me/EstudoVemESegueMe"
import Jantar from "../../components/others/Jantar"
import PreparacaoFaixaEGrito from "../../components/others/PreparacaoFaixaEGrito"
import ReuniaoCAC from "../../components/others/ReuniaoCAC"
import Schedule from "../../components/schedule/Schedule"

function Dia3() {
    return(
        <>
            <h1>3º dia</h1>
            <h2>Camiseta da equipe do FSY</h2>

            <Schedule 
                horario="7h45–8h;8h–8h15;8h15–9h15;9h25–10h15;10h30–11h;11h10–12h20;12h30–13h50;14h–14h50;15h–15h50;16h–16h40;16h50–17h50;18h–19h;19h–21h;21h15-21h45;21h45-22h30;22h30;22h40–23h;23h"
                atividade='Reunião de coordenadores assistentes/consultores;Devocional matutino dos participantes;Desjejum;Estudo do Vem, e Segue-Me;Preparação de faixas e gritos de guerra de torcidas;Manhã de jogos e grito de guerra de torcidas;Almoço | Ensaio do programa musical | Teste Para o Show de Variedades;Serão Vespertino do Casal Diretor "Educação e Autossuficiência";Atividade "Viver o Evangelho";Atividade "FSY Humano";Normas de etiqueta ao dançar | Tomar banho e se arrumar para o baile;Jantar;Baile + Lanche - 30min finais;Refletir e Analisar;Contagem dos participantes | Hora do silêncio | Preparação para o devocional e para dormir;Apagar as luzes;Reunião de coordenadores/coordenadores assistentes;Staff deve se recolher'
                idComponent="reuniao-cac;devocional-matutino;desjejum;estudo-vem-e-segue-me;preparacao-faixa-e-grito;manha-de-jogos;almoco;educacao-autossuficiencia;viver-evangelho;fsy-humano;normas-etiqueta-baile;jantar;baile;refletir-analisar;contagem-noturna3;apagar-luzes;#;#"
                namePage="dia3"
            />

            <ReuniaoCAC />

            <DevocionalMatutino />

            <Desjejum />

            <EstudoVemESegueMe />

            <PreparacaoFaixaEGrito />

            <ManhaJogos />

            <Almoco />

            <EnsaioProgramaMusical />

            <TesteShowVariedades />

            <EducacaoAutossuficiencia />

            <ViverEvangelho />

            <FSYHumano />

            <NormasEtiquetasBaile />

            <Jantar />

            <Baile />

            <h3 id="refletir-analisar">Refletir e analisar</h3>
            <p>Dirija o debate Refletir e Analisar e dê os últimos anúncios ou lembretes aos seus jovens. Lembre-os que eles devem usar a camisa do participante no dia seguinte, mas que devem trocar para roupas de domingo antes do Programa Musical.</p>
            <p>Orem juntos.</p>

            <ContagemNoturna3 />

            <h3 id="apagar-luzes">Apagar as luzes</h3>
            <p>Não durma até que as luzes estejam apagadas e os jovens dormindo.</p>
        </>
    )
}

export default Dia3