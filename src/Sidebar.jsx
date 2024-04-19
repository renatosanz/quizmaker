import "./Sidebar.css"
function Sidebar() {
    return (
        <div className={"sidebar"}>
            <p className="title">OpenNotionMentor</p>
            <div>
                <input id={"link"} type={"text"} placeholder={"Ingresa el link de tu pagina"}/>
            </div>
            <button className={"boton"} onClick="">Generar Quiz</button>
        </div>
    )
}

export default Sidebar
