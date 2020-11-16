import React, {Fragment} from 'react'
import "./styles/styles.scss";
import Curso from "./Curso"

const cursos = [
    {
        "title": "React desde cero",
        "image": "https://cdn.vox-cdn.com/thumbor/RVhobHgNC4xy7NSqXvVs13OdJIk=/0x0:4000x4000/1200x800/filters:focal(1680x1680:2320x2320)/cdn.vox-cdn.com/uploads/chorus_image/image/55649931/IM_Photo5.0.jpg",
        "price": "30",
        "teacher": "Francisco Garcia"
    },
    {
        "title": "Django desde cero",
        "image": "https://cdn.vox-cdn.com/thumbor/RVhobHgNC4xy7NSqXvVs13OdJIk=/0x0:4000x4000/1200x800/filters:focal(1680x1680:2320x2320)/cdn.vox-cdn.com/uploads/chorus_image/image/55649931/IM_Photo5.0.jpg",
        "price": "300",
        "teacher": "Carlos Garcia"
    },
    {
        "title": "Spark desde cero",
        "image": "https://cdn.vox-cdn.com/thumbor/RVhobHgNC4xy7NSqXvVs13OdJIk=/0x0:4000x4000/1200x800/filters:focal(1680x1680:2320x2320)/cdn.vox-cdn.com/uploads/chorus_image/image/55649931/IM_Photo5.0.jpg",
        "price": "30",
        "teacher": "Roberto Garcia"
    }
]

const App = () => (
    <Fragment>
        <div className="main-banner img-container l-section" id="main-banner">
            <div className="ed-grid lg-grid-6">
                <div className="lg-cols-4 lg-x-2">
                <img className="main-banner__img" alt="background-img" src="https://wallpapercave.com/wp/wp1887286.jpg"/>
                <div className="main-banner__data s-center">
                    <p className="t2 s-mb-0">Curso de ED Team</p>
                    <p> Tu futuro te está esperando</p>
                    <a href="https://ed.team/" className="button">Suscribirse</a>
                </div>
                </div>
            </div>
        </div>

        <div className="ed-grid m-grid-3">
            <Curso 
                title="React desde cero con Packo" 
                image="https://edteam-media.s3.amazonaws.com/courses/medium/0b4e6141-c9cd-4e05-bb59-55b4b9e67a14.png" 
                price="50 USD"
                teacher="Francisco Garcia"
            />
            <Curso 
                title="Python desde cero con Sante " 
                image="https://edteam-media.s3.amazonaws.com/courses/big/671fe4c0-bbac-4bbe-8a0e-3fb0811a8353.png" 
                price="80 USD"
                teacher="Francisco Enriquez"
            />

            {/* Para un card con valores por default */}
            <Curso />

            {/* Recorrer un array, utilizamos la estructura de spark */}
            {
                cursos.map( c => <Curso title={c.title} image={c.image} price={c.price} teacher={c.teacher} /> )
            }
            
        </div>
    </Fragment>
)

export default App;


//Reglas
// 1.- Toda etiqueta debe cerrarse
// 2.- Los componentes deben devolver un solo elemento padre
// 3.- Apoyarse delos fragments cuando necesito devolver dos elementos
// 4.- Nomenglatura fragment => <> hijos </>
// 5.- img siempre se CIERRA <img src="" className="" />
// 6.- class => className ----> class reservada para clases
// 7.- for => htmlFor
// 8.- No se puede usar if, else, while