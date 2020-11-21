import React, {Fragment} from 'react'
import "./styles/styles.scss";
import Banner from "./Banner"
import Formulario from "./Formulario"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import CourseGrid from './CourseGrid';
import Course from "./Course"
import MainMenu from "./MainMenu"
import Historial from './Historial';

const App = () => (
    <Router>
        <MainMenu />
        <Switch>
            <Route path="/" exact component={ Banner } />
            <Route path="/courses/:id" component={ Course } />
            <Route path="/courses" component={ CourseGrid } />
            <Route path="/historial/:valor" component={ Historial } />
            <Route path="/historial" component={ Historial } />

            <Route path="/form" component={ () => <Formulario name="Página de contacto"/> } />
            
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

//Importar en un envolvente todas las rutas de la app
//Las rutas que tienen parametros se ponen al inicio