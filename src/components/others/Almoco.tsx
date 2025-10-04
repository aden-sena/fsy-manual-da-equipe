import ShowComponent from "../modal/ShowComponent";

function Almoco() {
    return(
        <>
            <h3 id="almoco">Almoço</h3>

            <h4>Consultores</h4>
            <p>Se aplicam as mesmas diretrizes informadas na sessão sobre o <ShowComponent nameComponent="Desjejum" />.</p>

            <h4>Coordenadores</h4>
            <p>Mesmo que você esteja ocupado, não pule refeições. Lembre-se, você serve melhor os jovens se cuidar de seu bem-estar pessoal. Entre em contato com o pessoal da cozinha, se necessário, para ter certeza de que o FSY está fazendo as coisas da forma como eles gostariam. Entre em contato com o coordenador assistente responsável pelas refeições, caso seja necessário.</p>
        </>
    )
}

export default Almoco;