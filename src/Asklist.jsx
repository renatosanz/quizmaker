import Ask from "./Ask.jsx";
import "./Asklist.css"

function Workspace() {
    let preg = [
        {
            askname: "skd fmsd kmfks",
            solutions: [
                "aksmdka",
                "skdmflksd"
            ],
            solve: "aksmdka"
        },
        {
            askname: "skdf msdk mfks",
            solutions: [
                "aksmdka",
                "skdmflksd"
            ],
            solve: "aksmdka"
        },
        {
            askname: "skdfmsdkmfks",
            solutions: [
                "aksmdka",
                "skdmflksd"
            ],
            solve: "aksmdka"
        },
        {
            askname: "skdfmsdkmfks",
            solutions: [
                "aksmdka",
                "skdmflksd"
            ],
            solve: "aksmdka"
        }
    ];

    return (
        <div className={"asklist"}>
            {preg.map((p, index) => (
                <Ask key={index} ask={p.askname} sols={p.solutions} />
            ))}
        </div>
    );
}

export default Workspace;