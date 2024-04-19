import "./Sidebar.css"
function Sidebar() {
    return (
        <div className={"sidebar"}>
            <p1>OpenNotionMentor</p1>
            <div>
                <input id={"link"} type={"text"} placeholder={"Enter your page id"}/>
            </div>
            <button className={"boton"} onClick="">Generate quiz</button>
        </div>
    )
}

export default Sidebar
