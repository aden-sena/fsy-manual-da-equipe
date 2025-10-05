import "./Schedule.css"
import { HashLink } from "react-router-hash-link"

type ScheduleProps = {
    horario: string;
    atividade: string;
    idComponent: string;
    namePage: string;
}

function Schedule({horario, atividade, idComponent, namePage}: ScheduleProps) {
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
                        {id[index] === "#" ? <td>{atividades[index]}</td> : <td><HashLink to={`/${namePage}#${id[index]}`}>{atividades[index]}</HashLink></td>}
                    </tr>
                ))}
                </tbody>
            </table>

            <p><b>Consulte a programação acima ao longo do dia. As instruções para as atividades repetidas não serão dadas novamente nos outros dias. Consulte as instruções do dia anterior ou a seção de responsabilidades do programa para mais detalhes.</b></p>
        </>
    )
}

export default Schedule;