import { useState } from "react";
import { Modal } from "react-bootstrap";
import "./ModalWindow.css"
import Seguranca from "../../pages/seguranca/Seguranca";
import RefletirAnalisar from "../others/RefletirAnalisar";
import ConhecaConsultor from "../dia1-components/ConhecaConsultor";
import Desjejum from "../others/Desjejum";

type ShowComponentProps = {
    nameComponent: string
}

function ShowComponent({nameComponent}: ShowComponentProps) {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleOpen = () => setShow(true)

    return(
        <>
            <a onClick={handleOpen}>{nameComponent === "seguranca" ? "Segurança nas atividades da Igreja" : null}</a>
            <a onClick={handleOpen}>{nameComponent === "RefletirAnalisar" ? "Refletir e analisar" : null}</a>
            <a onClick={handleOpen}>{nameComponent === "ConhecaConsultor" ? "Conheça seu consultor" : null}</a>
            <a onClick={handleOpen}>{nameComponent === "Desjejum" ? "Desjejum" : null}</a>

            <Modal
                show={show}
                onHide={handleClose}
                id="seguranca-modal"
            >
                {nameComponent === "seguranca" ? <Seguranca /> : null}
                {nameComponent === "RefletirAnalisar" ? <RefletirAnalisar /> : null}
                {nameComponent === "ConhecaConsultor" ? <ConhecaConsultor /> : null}
                {nameComponent === "Desjejum" ? <Desjejum /> : null}

                <button id="modal-close" onClick={handleClose}><svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#1f1f1f"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></button>
            </Modal>
        </>
    ) 
}

export default ShowComponent;