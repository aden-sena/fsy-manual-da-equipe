import "./Checklist.css"

type ChecklistProps = {
    item: string;
}

function Checklist({item}: ChecklistProps) {
    let itens = item.split(';')

    return(
        <ul className="checklist">
            {itens.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}

export default Checklist;