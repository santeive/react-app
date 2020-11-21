import React, {Component} from "react"

class Formulario extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            nombre: "",
            correo: ""
        }

        {/* Hacemos el binding */}
        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarEmail = this.cambiarEmail.bind(this)
    }

    cambiarNombre(e) {
        {/* Manipulacion del estado */}
        this.setState({
            nombre: e.target.value
        })
    }

    cambiarEmail(e) {
        {/* Manipulacion del estado */}
        this.setState({
            correo: e.target.value
        })
    }

    render() {
        return (
            <div className="ed-grid">
                <h1>Formulario {this.props.name}</h1>
                <form action="/hola">
                    <div className="form__item">
                        <input 
                            type="text" 
                            onChange={this.cambiarNombre} 
                        />
                        <label>Nombre Completo</label>
                    </div>
                    <div className="form__item">
                        <input 
                            type="email" 
                            onChange={this.cambiarEmail}
                        />
                        <label>Correo Electronico</label>
                    </div>
                </form>
                <div>
                    <h3>{`Hola ${this.state.nombre}`}</h3>
                    <span>{`Tu correo es ${this.state.correo}`}</span>
                </div>
            </div>
        )
    }

}

export default Formulario