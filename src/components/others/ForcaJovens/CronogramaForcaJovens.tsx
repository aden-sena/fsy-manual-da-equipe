import "./CronogramaForcaJovens.css"

function CronogramaForcaJovens() {
    return(
        <>
            <p><b>Cronograma</b></p>
            <table id="cronograma-forca-jovens">
                <thead>
                    <tr>
                        <th>Atividade</th>
                        <th>Duração</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Introdução</td>
                        <td>3 minutos</td>
                    </tr>
                    <tr>
                        <td>Familiarizar-se com o guia Força dos Jovens</td>
                        <td>7 minutos</td>
                    </tr>
                    <tr>
                        <td>Instrução sobre a atividade</td>
                        <td>5 minutos</td>
                    </tr>
                    <tr>
                        <td>Preparação das atividades dos esquetes</td>
                        <td>15 minutos</td>
                    </tr>
                    <tr>
                        <td>Apresentação e debate</td>
                        <td>25 minutos</td>
                    </tr>
                    <tr>
                        <td>Conclusão</td>
                        <td>5 minutos</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default CronogramaForcaJovens;