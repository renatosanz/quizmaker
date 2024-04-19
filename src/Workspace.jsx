import Asklist from "./Asklist.jsx";
import './Worskspace.css'

function Workspace() {
    return (
        <div className={"workspace"}>
            <bottom>
                Send
            </bottom>

            <Asklist/>

            <div className={"cont_porcent_accurate"}>
                <p>85% of accuracy</p>
            </div>
        </div>
    )
}

export default Workspace
