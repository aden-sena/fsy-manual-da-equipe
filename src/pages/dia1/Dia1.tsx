import ApagarLuzes from "../../components/others/ApagarLuzes";
import BrincadeirasNoiteFamiliar from "../../components/others/BrincadeiraNoiteFamiliar";
import CheckIn from "../../components/dia1-components/CheckIn";
import ConhecaCompanhia from "../../components/dia1-components/ConhecaCompanhia";
import ConhecaConsultor from "../../components/dia1-components/ConhecaConsultor";
import ContagemNoturna from "../../components/others/ContagemNoturna";
import EnsaioDanca from "../../components/dia1-components/EnsaioDanca";
import HoraSilencio from "../../components/others/HoraSilencio";
import Jantar from "../../components/others/Jantar";
import NoiteFamiliar from "../../components/others/NoiteFamiliar";
import Orientacao from "../../components/dia1-components/Orientacao";
import RefletirAnalisar from "../../components/others/RefletirAnalisar";
import ReuniaoCCA from "../../components/others/ReuniaoCCA";
import ReuniaoEquipe from "../../components/others/ReuniaoEquipe";
import ReuniaoNoturnaCCA from "../../components/others/ReuniaoNoturnaCCA";
import Schedule from "../../components/schedule/Schedule";
import TempoLivre from "../../components/others/TempoLivre";

function Dia1() {
    return(
        <>
            <h1>1º dia</h1>
            <h2>Camiseta da equipe do FSY</h2>

            <h3>Programação</h3>
            <Schedule 
                horario="7h30–8h20,8h–8h20,8h30–9h15,9h15–10h45,11h–13h,13h15–14h,14h15–15h25,15h40–16h35,16h30–16h50,17h-17h50,18h–19h30,19h45–20h35,20h45–21h15,21h15–22h10,22h10,22h20-22h55"
                atividade="Desjejum da equipe,Reunião de coordenadores/coordenadores assistentes,Reunião administrativa,Distribuição de materiais | Ensaio da Orientação,Check-in/Almoço,Conheça seu consultor,Conheça sua companhia + Elaborar Metas,Orientação,Tempo Livre,Brincadeiras da Noite Familiar,Jantar,Aula da Noite Familiar,Refletir e Analisar,Contagem dos participantes | Higiene pessoal | Hora do silêncio,Apagar as luzes,Reunião de coordenadores/coordenadores assistentes"
                idComponent="#,reuniao-cca,#,#,check-in,conheca-consultor,conheca-companhia,orientacao,tempo-livre,brincadeiras-noite-familiar,jantar,noite-familiar,refletir-analisar,contagem-noturna,apagar-luzes,reuniao-noturna-cca"
                namePage="dia1"
            />

            <EnsaioDanca />

            <ReuniaoCCA />

            <ReuniaoEquipe />

            <CheckIn />

            <ConhecaConsultor />

            <ConhecaCompanhia />

            <Orientacao />

            <TempoLivre />

            <BrincadeirasNoiteFamiliar />

            <Jantar />

            <NoiteFamiliar />

            <RefletirAnalisar />

            <ContagemNoturna />

            <HoraSilencio />

            <ApagarLuzes />

            <ReuniaoNoturnaCCA />
        </>
    )
}

export default Dia1;