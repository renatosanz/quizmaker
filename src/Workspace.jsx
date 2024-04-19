import Asklist from "./Asklist.jsx";
import './Worskspace.css'

function Workspace() {
    return (
        <div className={"workspace"}>
            <button id={"send_answers"} >
                Enviar Respuesta
            </button>

            <Asklist/>

            <div className={"cont_porcent_accurate"}>
                <p id="porcentAccuracy" >85% de aciertos</p>
            </div>
        </div>
    )
}

export default Workspace
