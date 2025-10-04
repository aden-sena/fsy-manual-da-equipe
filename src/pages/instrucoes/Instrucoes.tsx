import Checklist from "../../components/checklist/Checklist";
import "./Instrucoes.css"
import participante from "../../assets/img/participante.png"
import participantes2 from "../../assets/img/participantes2.png"
import { openCitacao } from "../../components/references-bar/ReferencesBar";
import ShowComponent from "../../components/modal/ShowComponent";

function Instrucoes() {
    return(
        <>
            <h1>Instruções para a equipe</h1>

            <h2>Instruções para os consultores</h2>

            <p>Como consultor, é você quem mais influencia a qualidade da experiência dos jovens na conferência FSY. É fundamental que você dê o exemplo e desenvolva relacionamentos significativos com os jovens. Conheça e preste atenção em cada um dos jovens de seu grupo. Ensine, inspire, interaja e se divirta com eles. Seja um exemplo de obediência e ajude a mantê-los em segurança.</p>

            <p>A sua dedicação nos estudos e na preparação antes do FSY farão de você um consultor eficaz, o que inclui ser tanto um bom aluno quanto um bom professor. Construa relacionamentos com seus líderes e tenha uma postura ensinável ao aceitar a orientação deles, tendo em mente que eles desejam o seu sucesso.Você se tornará um bom mentor para seus jovens ao implementar e buscar inspiração na sabedoria e nos conselhos de líderes inspirados.</p>

            <p>Na conferência FSY, você vai supervisionar um “grupo do consultor” de 10 a 12 participantes do mesmo sexo que o seu. Você também terá pelo menos um consultor adjunto do sexo oposto. Juntos, o seu grupo e do consultor formarão uma “companhia”. Várias atividades serão realizadas somente com seu grupo do consultor, mas outras serão realizadas com a companhia e supervisionadas por você e seus consultores adjuntos.</p>

            <p>Um coordenador assistente do mesmo sexo que o seu será designado para super visionar você e outros consultores. Procure conhecer seu coordenador assistente e sinta-se à vontade para fazer perguntas e lhe pedir ajuda quando necessário.</p>

            <p>Por mais que você seja designado a um grupo específico de jovens, toda a equipe do FSY é responsável por zelar e cuidar de todos eles. Caso veja algum participante fazendo algo que coloque em risco a saúde ou a segurança de alguém, aja com responsabilidade para resolver a situação. Seja cuidadoso, particularmente, com os jovens que possuem necessidades especiais. Mantenha seu coordenador assistente bem-informado a respeito de jovens que estejam com dificuldades ou de qualquer situação que exija disciplina. Peça auxílio para os jovens que precisam de mais atenção exclusiva.</p>

            <p className="citacao">“Não posso dizer (...) a cada líder de jovens quais são os detalhes do que é melhor para vocês fazerem. Mas posso prometer-lhes que terão a bênção de ajudá-los a reconhecer os dons espirituais com os quais nasceram. Toda pessoa é diferente e tem uma contribuição diferente a fazer. Ninguém está destinado a fracassar (...). Deus conhece nossos dons. Meu desafio para vocês e para mim é orar para conhecer os dons que nos foram dados, saber como desenvolvê-los e reconhecer as oportunidades que Deus nos concede de servir ao próximo. Acima de tudo, oro para que sejam inspirados a ajudar outros a descobrir os dons divinos que eles têm para servir. Prometo que se pedirem, terão a bênção de ajudar e elevar outros a seu pleno potencial no serviço daqueles que eles lideram e amam.”<a onClick={() => openCitacao("instrucoes1")}>¹</a></p>

            <h2>Instruções para os coordenadores assistentes</h2>

            <p>Como coordenador assistente, você será o elo entre consultores e coordenadores. Você vai supervisionar um grupo de consultores enquanto cuida de várias responsabilidades do dia a dia. À medida que você demonstra humildade e se esforça para apoiar e edificar os consultores em sua sessão, eles se tornam mais capazes de abençoar a vida dos jovens.</p>

            <p>Apoie o casal diretor da sessão, os coordenadores, os coordenadores de bem-estar e os outros coordenadores assistentes, seguindo as normas e orientações da conferência FSY. Seja proativo. Caso veja que algo precisa ser feito, resolva a situação.</p>

            <p>Para ser competente, você deve estudar, aprender e se preparar constantemente. Construa relacionamentos com seus colegas e tenha uma postura ensinável ao aceitar orientações, tendo em mente que eles desejam o seu sucesso. Você vai fortalecer suas habilidades de liderança ao implementar e buscar inspiração na sabedoria e nos conselhos de líderes inspirados.</p>

            <h3>Edificar relacionamentos com a equipe da conferência FSY</h3>

            <p>Criar relacionamentos significativos com toda a equipe, principalmente com os consultores que você supervisiona, exige esforço diligente e é fundamental para que você seja um coordenador assistente competente.Você construirá relacionamentos de confiança à medida que organiza e prioriza seu tempo para incluir as seguintes ações em sua rotina diária:</p>

            <ul>
                <li>Estabeleça um padrão de comunicação aberta e honesta. Seja um amigo e um mentor.</li>
                <li>Ore, pondere, ouça e planeje maneiras de atender às necessidades dos outros</li>
                <li>Esteja atento à saúde emocional e física das outras pessoas. Incentive-as a comer bem e dormir o máximo possível.</li>
                <li>Fortaleça as pessoas quando elas estiverem sobrecarregadas espiritual, emocional e fisicamente.</li>
            </ul>

            <h4>Concentrar-se nos pontos fortes</h4>
            <p>Todos os que trabalham com os jovens no FSY têm qualidades e talentos únicos que fazem deles recursos poderosos para o programa. Muitos podem não reconhecer seus próprios pontos fortes ou talvez não tenham aprendido a usá-los em todo o seu potencial. Para aumentar a confiança desses membros e o impacto que eles têm sobre as outras pessoas, reconheça e elogie suas qualidades e os ajude a desenvolver e usar seus pontos fortes.</p>

            <h4>Fazer comentários construtivos</h4>
            <p>ocê pode estar se perguntando qual é a melhor forma de ajudar um membro da equipeque deseja melhorar. Lembre-se de que todos aqueles que estão buscando melhorar em suas responsabilidades podem se beneficiar de uma perspectiva externa. Estabeleça, já no início de seus relacionamentos, uma expectativa de comunicação mútua. Incentive sugestões e converse abertamente quando receber comentários construtivos. Ao construir um relacionamento de cooperação, você se torna mais competente e se sente mais à vontade para cumprir suas responsabilidades, como observar, debater condutas positivas e negativas e estabelecer expectativas claras.</p>

            <h3>Desenvolvimento dos consultores</h3>

            <p>Os coordenadores assistentes são responsáveis por orientar e encorajar os consultores, sempre os ajudando a melhorar em suas responsabilidades enquanto trabalham com os jovens. Procure incentivar os consultores que você supervisiona a se esforçarem ao máximo para melhorar a experiência dos jovens na conferência FSY. As reuniões e atividades a seguir fazem parte de um esforço conjunto para ajudar os consultores a cumprir suas responsabilidades e expectativas no FSY:</p>

            <ul>
                <li>Reunião de coordenador e assistentes/consultores(dia zero)</li>
                <li>Entrevistas com os consultores (dia zero e 1º dia)</li>
                <li>Observações</li>
                <li>Reunião matutina de coordenadores assistentes/consultores ( do 2º ao 5º dia)</li>
                <li>Reunião da tarde de coordenadores assistentes/consultores(no 2º e no 3º dia</li>
            </ul>

            <p>Essas interações lhe dão a chance de elogiar o desempenho positivo dos consultores e motivá-los a melhorar. As avaliações fortalecem as habilidades dos consultores à medida que eles trabalham com os jovens.Faça uma avaliação edificante com bondade e amor. Procure ajudar os consultores a entender o cronograma e a trabalhar com jovens difíceis. Familiarize-se com as instruções e programações das atividades da conferência FSY contidas neste manual.</p>

            <h3>Entrevista com o coordenador</h3>

            <p>Durante a semana, seu coordenador se reunirá com você individualmente para analisar suas metas e conversar sobre expectativas e preocupações. Em preparação para essa entrevista, recapitule suas funções, responsabilidades e expectativas com o coordenador assistente para que você possa estabelecer e registrar suas metas.</p>

            <h3>Relacionamento com os participantes</h3>

            <p>Seja cuidadoso com os jovens que possuem necessidades especiais. Mantenha os coordenadores bem informados sobre os jovens com dificuldades. Ensine, interaja e se divirta com os jovens. Lembre-se de que você poderá ser chamado para ajudar em questões disciplinares.</p>

            <img src={participante} />

            <h2>Responsabilidades dos coordenadores assistentes do programa</h2>
            <p><b>Responsabilidades específicas do programa podem ser designadas a você ao longo da semana. As instruções para cada uma delas se encontram nas páginas a seguir. Consulte essa seção durante toda a conferência.</b></p>

            <p>Uma de suas principais responsabilidades como coordenador assistente é supervisionar e executar tarefas administrativas.Conheça seus deveres e os cumpra com sucesso. Chegue sempre cedo nas atividades para que os consultores possam se apresentar a você e saibam onde encontrá-lo. Familiarize-se com as tarefas dos consultores. Ajude os consultores a cumprir as responsabilidades deles.</p>

            <h2>Preparação e planejamento dos coordenadores antes da sessão</h2>

            <h3>Reunir-se com os administradores e comitês de logística</h3>
            <p>Converse com o casal diretor da sessão e com a equipe de logística para definir quando você deve chegar. Isso deve lhe dar tempo para se reunir com os administradores e o comitê de logística e preparar todas as outras tarefas sob sua responsabilidade. Debatemos detalhes da programação e as várias atividades, bem como os suprimentos e materiais que você precisará para dirigir com eficiência a sessão. Debatam planos alternativos para casos de condições climáticas adversas.</p>

            <p>Reveja os procedimentos de check-in e check-out dos participantes e, se necessário,trate de questões sobre o alojamento. Conforme necessário, debatam as normas do alojamento e como as chaves serão distribuídas e devolvidas (se aplicável).Analise as regras e os regulamentos determinados pelo estabelecimento onde ocorrerá o evento.</p>

            <p>Um administrador de logística deve lhe dar os materiais necessários para a semana (como as chaves). Os materiais podem variar dependendo do local da atividade.</p>

            <p>Certifique-se de trocar informações de contato com os administradores de logística e os responsáveis do local. Seja organizado ao trabalhar com seu contato do local da atividade. Anote quaisquer perguntas ou preocupações antes do começo de sua sessão. Se oresponsável do local precisar de mais informações, forneça imediatamente. Lembrem-se de que a organização é a chave para o sucesso.</p>

            <h3>Organização da sessão</h3>
            <p><b>Use a lista abaixo para ajudar nos preparativos antes da sessão.</b></p>

            <h4>Casal diretor da sessão</h4>
            <p>Certifique-se de que você e o casal diretor da sessão se comuniquem a todo momento.Trabalhem juntos em equipe para que a sessão ocorra tranquilamente e seja bem-sucedida.</p>

            <h4>Escritório local (opcional, mas recomendado)</h4>
            <Checklist 
                item="Prepare uma sala ou um espaço que servirá como escritório local. Ele deve ser de fácil acesso à equipe do FSY durante toda a sessão. O escritório ajuda a equipe a organizar e executar um programa bem-sucedido. Ele pode ser usado para guardar suprimentos e realizar as reuniões da equipe.;
                Arranje uma mesa ou um local para realizar as reuniões com sua equipe (se possível).;
                Organize os materiais de check-in dos participantes e certifique-se de que você tenha todos os recursos necessários para o check-in."
            />

            <h4>Companhias e grupos de coordenadores assistentes</h4>
            <Checklist 
                item="Defina uma escritura para cada companhia. As companhias usarão a escritura para criar o seu nome.;
                Faça uma lista com o número de jovens em cada companhia.;
                Mapeie a área e, com os coordenadores assistentes, estabeleçam os locais de encontro de cada companhia para a conferência. Os locais de encontro são as áreas onde cada companhia vai se reunir para realizar suas atividades. Os locais das companhias devem estar distantes o suficiente uns dos outros para que não haja distração ou interrupção.;
                Sob a direção do casal diretor, designe grupos de coordenadores assistentes"
            />

            <h4>Pastas do coordenador assistente</h4>
            <Checklist 
                item="Lista dos participantes para cada consultor;
                Folha de contagem dos participantes do 1º dia (se aplicável);
                Folha de designação de funções do coordenador assistente;
                Lista das companhias com a contagem dos jovens;
                Mapa do local das companhias;
                Lista de supervisão dos grupos de consultor com os números dos quartos dos consultores (se aplicável)"
            />

            <img src={participantes2} />

            <h4>Equipamentos e materiais para a sessão</h4>
            <p>Trabalhe com os administradores de logística para verificar se todos os suprimentos necessários estão no lugar certo antes do início da conferência FSY.</p>

            <p><b>Materiais para a sessão:</b></p>
            <Checklist 
                item="Equipamentos de som;
                Materiais para atividades;
                Materiais para as bandeiras;
                Materiais para a noite de jogos;
                Roteiros e partituras do programa musical"
            />

            <p><b>Materiais da equipe do FSY:</b></p>
            <Checklist 
                item="Camisetas da equipe do FSY;
                Crachás;
                Manuais da equipe"
            />

            <p><b>Materiais do participante na chegada:</b></p>
            <Checklist 
                item="Crachás;
                Manuais dos participantes;
                Camisetas do FSY;
                Outros materiais do FSY, como pulseiras, cordões para crachás, garrafas de água (os detalhes variam para cada sessão)"
            />

            <h3>Designações de funções do coordenador assistente</h3>
            <p>Sob a direção do casal diretor, designe e registre as funções do programa para cada coordenador assistente ou membro da equipe do FSY. Certifique-se de que todos os coordenadores assistentes conhecem e compreendem suas funções. Responda às perguntas que tiverem e ofereça apoio a eles durante a conferência.</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>DESIGNAÇÃO DE RESPONSABILIDADES</th>
                        <th>COORDENADOR ASSISTENTE OU MEMBRO DA EQUIPE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dança dos consultores na orientação (opcional)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Baile</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Atividade do guia Força dos Jovens</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Noite de jogos</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Almoço</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Programa musical</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Check-in dos participantes</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Tempo livre dos participantes</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Apresentação de slides (se aplicável)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Reunião de testemunhos</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

            <h2>Instruções para o casal diretor da sessão</h2>
            <p>Como casal diretor da sessão, vocês vão treinar, ensinar e inspirar os coordenadores, coordenadores assistentes e consultores que vocês supervisionam.Vocês também terão a oportunidade de trabalhar com vários funcionários e administradores do local para garantir o sucesso logístico da sessão do FSY. À medida que vocês demonstram humildade e se esforçam para apoiar e edificar as pessoas que servem e trabalham com vocês, elas se tornam mais capazes de abençoar a vida das pessoas que trabalham com elas.</p>

            <h3>Desenvolver relacionamentos</h3>
            <p>Criar relacionamentos significativos com a equipe e os jovens exige esforço diligente eé fundamental para que vocês sejam competentes como casal diretor da sessão. Vocês vão edificar relacionamentos positivos e de confiança ao ensinar atividades para toda a sessão e participando de interações individuais.</p>

            <h4>Concentrar-se nos pontos fortes</h4>
            <p>Todos os que trabalham com os jovens na conferência FSY têm qualidades e talentos únicos que fazem deles recursos poderosos para o programa. Muitos podem não reconhecer seus próprios pontos fortes ou talvez não tenham aprendido a usá-los em todo o seu potencial. Para aumentar a confiança desses membros e o impacto que eles têm sobre as outras pessoas, reconheça e elogie suas qualidades e os ajude a desenvolver e usar seus pontos fortes.</p>

            <h4>Fazer comentários construtivos</h4>
            <p>Você pode estar se perguntando qual é a melhor forma de ajudar um membro da equipe que deseja melhorar. Lembre-se de que todos aqueles que estão buscando melhorar em suas responsabilidades podem se beneficiar de uma perspectiva externa. Estabeleça, já no início de seus relacionamentos, uma expectativa de comunicação mútua. Incentive sugestões e converse abertamente quando receber comentários construtivos. Ao construir um relacionamento de cooperação, você se torna mais competente e se sente mais à vontade para cumprir suas responsabilidades como observar, debater condutas positivas e negativas, e estabelecer expectativas claras.</p>

            <h2>Preparação e planejamento do casal diretor antes da sessão</h2>

            <h3>Reunir-se com os administradores e comitês de logística</h3>
            <p>Trabalhem com os coordenadores e a equipe de logística para definir quando vocês devem chegar. Isso deve lhes dar tempo para se reunirem com os administradores de logística e o comitê e preparar todas as outras tarefas sob sua responsabilidade. Depois debatam os detalhes da programação e as várias atividades, bem como os suprimentos e materiais que vocês precisarão para dirigir a sessão com sucesso. Debatam planos alternativos para casos de condições climáticas adversas.</p>

            <p>Assegurem-se de que os administradores logísticos e o responsável pelas instalações tenham suas informações de contato e que vocês tenham as informações deles. Seja organizado ao trabalhar com seu contato do local da atividade.Anote quaisquer perguntas ou preocupações antes do começo de sua sessão.Se o responsável do local precisar de mais informações, forneça imediatamente. Lembrem-se de que a organização é a chave para o sucesso.</p>

            <h3>Preparar-se para as designações de ensino</h3>
            <p>Desenvolvam um plano para ensinar o tema durante a semana.</p>

            <p>Decidam quais <a href="https://www.churchofjesuschrist.org/study/music/youth-music?lang=por" target="_blank">músicas</a> vocês gostariam de usar nas oportunidades de ensino. Contatem os coordenadores se vocês quiserem um número musical para o devocional que acontece antes da sessão.Se vocês desejarem que os membros da liderança apresentem números musicais nos devocionais, digam aos coordenadores quais músicas vocês gostariam que fossem cantadas e em quais reuniões.</p>

            <p>Durante cada oportunidade de ensino, encorajem os jovens a “levarem a mensagem para casa” escrevendo seus pensamentos e sentimentos no manual do participante e se comprometendo a fazer ou compartilhar algo com os outros durante as atividades “<ShowComponent nameComponent="RefletirAnalisar" />”.</p>

            <h3>Sugestões diversas</h3>
            <ul>
                <li>Alguns casais diretores de sessão gostam de ficar juntos o máximo possível durante as atividades da sessão. Outros casais podem optar por se separar para participar de mais atividades.</li>
                <li>Sentem-se juntos ao púlpito.</li>
                <li>Façam as refeições com os jovens e os consultores.</li>
                <li>Visitem as áreas do alojamento para ver como estão os jovens.</li>
                <li>Participem das atividades. Quanto mais envolvidos vocês estiverem, melhor será. Aproveitem essas oportunidades para conhecer os jovens e os consultores.</li>
                <li>Lembrem-se de que, sejam quais forem seus talentos, vocês nunca se arrependerão de sair de sua zona de conforto.</li>
            </ul>
        </>
    )
}

export default Instrucoes;