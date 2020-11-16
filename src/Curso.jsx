import React from "react"
import PropTypes from 'prop-types'

const persona = {"nombre": "Francisco", "apellido":"Garcia", "edad":26}
const mayorDeEdad = edad => edad > 18
const curso = {
    "nombre": "React desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/medium/0b4e6141-c9cd-4e05-bb59-55b4b9e67a14.png",
    "precio": "50 USD"
}

const Curso = ({title, image, price, teacher}) => (

    <div className="ed-grid m-grid-4">
        <article className="card">
            <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <img src= {image} alt="thumb"/>
            </div>

            <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 className="t5 s-mb-2 s-center">
                    {title} 
                </h3>
                <div className="s-mb-2 s-main-center">
                    <div className="card__teacher s-cross-center">
                        <div className="card__avatar s-mr-1">
                            <div className="circle img-container">
                                <img src="https://edteam-media.s3.amazonaws.com/users/thumbnail/617b5418-a3c2-4e6d-adf0-3f39d6e62226.jpeg" alt=""/>
                            </div>
                        </div>
                        <span className="small">{teacher}</span>
                    </div>
                </div>
                <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="#"> {`$ ${price}`}  </a>
                </div>
            </div>
        </article>
    </div>
)


Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    teacher: PropTypes.string
}

// Valores por defecto
Curso.defaultProps = {
    title: "Comming soon",
    image: "https://s.hdnux.com/photos/01/07/34/20/18727976/11/rawImage.jpg",
    price: "In USD",
    teacher: "Boss"
}

export default Curso