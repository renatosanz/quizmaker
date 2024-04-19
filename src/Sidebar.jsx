import "./Sidebar.css"
function Sidebar() {
    return (
        <div className={"sidebar"}>
            <p1>OpenNotionMentor</p1>
            <div>
                <input type={"text"} placeholder={"Enter your page id"}/>
            </div>
            <button>Generate quiz</button>
        </div>
    )
}

export default Sidebar
