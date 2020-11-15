import React, {Fragment} from 'react'
import "./styles/styles.scss";
import Curso from "./Curso"

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
        <Curso />
        <Curso />
        <Curso />
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