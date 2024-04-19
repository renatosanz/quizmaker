import "./Ask.css"
function Ask({ask,sols}) {
    return (
        <form className={"ask"}>
            <label className={"main_ask"}>
                {ask}
            </label>
            <select className={"ask_solutions"}>
                {
                    sols.map((e,index)=>(
                        <option className="sols" key={index}>{e}</option>
                    ))
                }
            </select>
        </form>
    )
}

export default Ask