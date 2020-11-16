import React, {Fragment} from 'react'
import "./styles/styles.scss";
import Curso from "./Curso"
import Course from "./Course"
import Banner from "./Banner"
import Formulario from "./Formulario"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

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

    <Router>
        <Switch>
            <Route path="/" exact component={ Banner } />
            <Route path="/course/:id" component={ Course } />
            <Route path="/course" component={ Curso } />
            <Route path="/form" component={ () => <Formulario/> } />
            <Route component={() => (
                <div className="ed-grid">
                    <h1>Error 404</h1>
                    <span>Página no encontrada</span>
                </div>
            )} />
        </Switch>
    </Router>
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