import { openScripture } from "../../components/references-bar/ReferencesBar";
import { openCitacao } from "../../components/references-bar/ReferencesBar";

function Home() {
    return(
     <>
        <h1>Bem-vindo à conferência FSY</h1>
        <p>Você foi chamado e designado para a “<a onClick={() => openScripture("d&c4:1")}>obra maravilhosa</a>” do Senhor em uma época emocionante. Como líder jovem em uma conferência Para o Vigor da Juventude (FSY), sua função é muito importante e os efeitos de seus esforços são eternos.</p>

        <p>Tudo o que fizer — suas palavras, suas ações e sua atitude — deve refletir sua conversão ao evangelho. Com o “<a onClick={() => openScripture("alma5:19")}>coração puro</a>”, você conseguirá ensinar com entusiasmo e testificar das bênçãos do evangelho por experiência pessoal e vai sentir a grande alegria de ser um instrumento digno nas mãos de Deus.</p>

        <p className="citacao">“Meus queridos jovens, esses certamente são os últimos dias e o Senhor está apressando Sua obra para coligar Israel. Essa coligação é a coisa mais importante que está acontecendo na Terra hoje em dia. Nada se compara em grandeza, em importância e em majestade. E se vocês escolherem, se desejarem, podem ser parte essencial dela. Vocês podem fazer parte de algo grande, importante e majestoso!”<a onClick={() => openCitacao("rmn-juventude-da-promessa")}>¹</a></p>

        <p>Este manual detalha suas responsabilidades na conferência FSY. É um recurso para ajudá-lo a liderar os jovens que o Pai Celestial confiou a você. Estude-o cuidadosamente, siga as diretrizes e busque a companhia do Espírito Santo para saber como abençoar os jovens. Os pais, os líderes da Igreja e o Salvador contam com você, com sua bondade e fidelidade para oferecer uma experiência de mudança de vida para os jovens a quem serve.</p>
     </>
    )
}

export default Home;