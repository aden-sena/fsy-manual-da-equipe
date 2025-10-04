import "./Schedule.css"

type ScheduleProps = {
    horario: string;
    atividade: string;
    idComponent: string;
}

function Schedule({horario, atividade, idComponent}: ScheduleProps) {
    let horas: Array<String> = horario.split(',')
    let atividades: Array<String> = atividade.split(',')
    let id: Array<String> = idComponent.split(',')

    return(
        <>
            <table className="schedule">
                <tbody>
                {horas.map((hora, index) => (
                    <tr key={index}>
                        <th>{hora}</th>
                        {id[index] === "#" ? <td>{atividades[index]}</td> : <td><a href={`#${id[index]}`}>{atividades[index]}</a></td>}
                    </tr>
                ))}
                </tbody>
            </table>

            <p><b>Consulte a programação acima ao longo do dia. As instruções para as atividades repetidas não serão dadas novamente nos outros dias. Consulte as instruções do dia anterior ou a seção de responsabilidades do programa para mais detalhes.</b></p>
        </>
    )
}

export default Schedule;