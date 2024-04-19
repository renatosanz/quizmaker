import Ask from "./Ask.jsx";
import "./Asklist.css"

function Workspace() {
    let preg = [{
        pregunta:"¿Cuál es el enfoque principal de la historia como disciplina?",opciones:["Estudiar el presente","Comprender el futuro","Analizar elpasado","Evaluar el legado cultural"],respuesta:2},{
        pregunta:"¿Qué permitela historia?",
        opciones:["Reconstruir eventos históricos",
        "Explorar la evolución cultural","Identificar tendencias futuras","Todas las anteriores"],
        respuesta:3},{
        pregunta:"¿Cuál es un ejemplo de los logros humanos que la historia estudia?",opciones:[
            "El desarrollo de la agricultura",
            "La construcción de civilizaciones",
            "El descubrimiento de la penicilina",
            "La creación de Internet"],
            respuesta:1
        }
        ,{
            pregunta:"¿Desde qué momento estudia la historia los orígenes de la humanidad?",
            opciones:["Desde la creación del universo",
            "Desde la aparición del Homo sapiens",
            "Desde el inicio de la civilización",
        "Desde la Revolución Industrial"],
    respuesta:1
},
    { 
        pregunta:"¿Cuál es el objetivo de la evolución social estudiada por la historia?",
        opciones:["Entender cómo las sociedades han cambiado con el tiempo",
        "Predecir el futuro de las civilizaciones",
        " Juzgar las sociedades pasadas",
        "Todas las anteriores"],
        respuesta:0
    }
];

    return (
        <div className={"asklist"}>
            {preg.map((p, index) => (
                <Ask key={index} ask={p.pregunta} sols={p.opciones} />
            ))}
        </div>
    );
}

export default Workspace;