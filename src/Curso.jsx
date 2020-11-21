import React from "react"
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"

const Curso = ({id, title, image, price, teacher}) => (

        <article className="card">
            <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <Link to={`/courses/${id}`}>
                    <img src= {image} alt={title}/>
                </Link>
            </div>

            <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 className="t5 s-mb-2 s-center"> {title} </h3>
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
)


/*Curso.propTypes = {
    id: PropTypes.In
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    teacher: PropTypes.string
}*/

// Valores por defecto
Curso.defaultProps = {
    title: "Comming soon",
    image: "https://s.hdnux.com/photos/01/07/34/20/18727976/11/rawImage.jpg",
    price: "In USD",
    teacher: "Boss"
}

export default Curso