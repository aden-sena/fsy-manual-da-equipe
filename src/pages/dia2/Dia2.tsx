import Desjejum from "../../components/others/Desjejum";
import DevocionalMatutino from "../../components/others/DevocionalMatutino";
import ReuniaoCAC from "../../components/others/ReuniaoCAC";
import Schedule from "../../components/schedule/Schedule";
import ReuniaoSacramental from "../../components/dia2-components/ReuniaoSacramental";
import VemESegueMe from "../../components/dia2-components/VemESegueMe";
import FamilySearch from "../../components/others/FamilySearch";
import Almoco from "../../components/others/Almoco";
import EnsaioProgramaMusical from "../../components/others/EnsaioProgramaMusical";
import CompartilharEvangelho from "../../components/others/compartilhar-evangelho/CompartilharEvangelho";
import TempoLivre from "../../components/others/TempoLivre";
import ForcaJovens from "../../components/others/ForcaJovens/ForcaJovens";
import DevocionalSetentaPresidente from "../../components/dia2-components/DevocionalSetentaPresidente";
import Jantar from "../../components/others/Jantar";
import RefletirAnalisar from "../../components/others/RefletirAnalisar";
import ContagemNoturna from "../../components/others/ContagemNoturna";
import HoraSilencio from "../../components/others/HoraSilencio";
import ApagarLuzes from "../../components/others/ApagarLuzes";
import ReuniaoNoturnaCCA from "../../components/others/ReuniaoNoturnaCCA";

function Dia2() {
    return(
        <>
            <h1>2º dia</h1>
            <h2>Roupa dominical</h2>

            <h3>Programação</h3>
            <Schedule 
                horario="7h–8h,7h45-8h,8h–8h15,8h15–9h15,9h30–10h30,10h40–11h30,11h45–12h30,13h–14h30,14h30–15h30,15h40–16h40,16h50–17h50,18h–18h50,19h–20h30,20h45–21h15,21h20–22h,22h10,22h20-22h50,23h"
                atividade='Acordar e se preparar para o dia,Reunião de coordenadores assistentes/consultores,Devocional matutino dos participantes,Desjejum,Reunião Sacramental,Vem e Segue-me (Escola Dominical),Tempo disponibilizado para o Family Search,Almoço | Ensaio do programa musical,Atividade Compartilhar o Evangelho,Tempo Livre,Atividade “Força dos Jovens”,Devocional com o Setenta/Presidente de Estaca,Jantar,Refletir e analisar,Contagem dos participantes | Hora do silêncio | higiene e estudo pessoal,Apagar as luzes,Reunião de coordenadores/coordenadores assistentes,Staff deve se recolher'
                idComponent="#,reuniao-cca,devocional-matutino,desjejum,reuniao-sacramental,vem-e-segue-me,family-search,almoco,compartilhar-evangelho,tempo-livre,forca-jovens,devocional-setenta-presidente,jantar,refletir-analisar,contagem-noturna,apagar-luzes,reuniao-noturna-cca,#"
            />

            <ReuniaoCAC />

            <DevocionalMatutino />

            <Desjejum />

            <ReuniaoSacramental />

            <VemESegueMe />

            <FamilySearch />

            <Almoco />

            <EnsaioProgramaMusical />

            <CompartilharEvangelho />

            <TempoLivre />

            <ForcaJovens />

            <DevocionalSetentaPresidente />

            <Jantar />

            <RefletirAnalisar />

            <ContagemNoturna />

            <HoraSilencio />

            <ApagarLuzes />

            <ReuniaoNoturnaCCA />
        </>
    )
}

export default Dia2;