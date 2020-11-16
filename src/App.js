import React, {Fragment} from 'react'
import "./styles/styles.scss";
import Curso from "./Curso"
import Banner from "./Banner"
import Formulario from "./Formulario"

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
    }
]

const App = () => (
    <Fragment>
        <Banner />

        {/* Grid de cursos */}
        <div className="ed-grid m-grid-3">
            {/* Para un card con valores por default */}
            <Curso />

            {/* Recorrer un array, utilizamos la estructura de spark */}
            {
                cursos.map( c => <Curso title={c.title} image={c.image} price={c.price} teacher={c.teacher} /> )
            }

        </div>

        <Formulario />
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