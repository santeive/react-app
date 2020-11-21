import React from "react"

const cursos = [
    {
        "id": 1,
        "title": "React desde cero",
        "image": "https://cdn.vox-cdn.com/thumbor/RVhobHgNC4xy7NSqXvVs13OdJIk=/0x0:4000x4000/1200x800/filters:focal(1680x1680:2320x2320)/cdn.vox-cdn.com/uploads/chorus_image/image/55649931/IM_Photo5.0.jpg",
        "price": "30",
        "teacher": "Francisco Garcia"
    },
    {
        "id": 2,
        "title": "Django desde cero",
        "image": "https://cdn.vox-cdn.com/thumbor/RVhobHgNC4xy7NSqXvVs13OdJIk=/0x0:4000x4000/1200x800/filters:focal(1680x1680:2320x2320)/cdn.vox-cdn.com/uploads/chorus_image/image/55649931/IM_Photo5.0.jpg",
        "price": "100",
        "teacher": "Carlos Garcia"
    },
    {
        "id": 3,
        "title": "Python desde cero",
        "image": "https://cdn.vox-cdn.com/thumbor/RVhobHgNC4xy7NSqXvVs13OdJIk=/0x0:4000x4000/1200x800/filters:focal(1680x1680:2320x2320)/cdn.vox-cdn.com/uploads/chorus_image/image/55649931/IM_Photo5.0.jpg",
        "price": "300",
        "teacher": "Daniel Garcia"
    },
    {
        "id": 4,
        "title": "Javascritp desde cero",
        "image": "https://cdn.vox-cdn.com/thumbor/RVhobHgNC4xy7NSqXvVs13OdJIk=/0x0:4000x4000/1200x800/filters:focal(1680x1680:2320x2320)/cdn.vox-cdn.com/uploads/chorus_image/image/55649931/IM_Photo5.0.jpg",
        "price": "400",
        "teacher": "Roman Garcia"
    },
    {
        "id": 5,
        "title": "Flask desde cero",
        "image": "https://cdn.vox-cdn.com/thumbor/RVhobHgNC4xy7NSqXvVs13OdJIk=/0x0:4000x4000/1200x800/filters:focal(1680x1680:2320x2320)/cdn.vox-cdn.com/uploads/chorus_image/image/55649931/IM_Photo5.0.jpg",
        "price": "400",
        "teacher": "Francisco Garcia"
    }
]

const Course = ({match}) => {

    //Accedo a los parametros de la url a través de la propiedad match
    const CursoActual = cursos.filter(c => c.id === parseInt(match.params.id))[0]

    return (
        CursoActual ? (

            <div className="ed-grid m-grid-3">
            <h1 className="m-cols-3">Curso: {CursoActual.title}</h1>
                <img className="m-cols-1" src={ CursoActual.image} />
            <p className="m-cols-2">Profesor: {CursoActual.teacher}</p>
        </div>
        ): (
            <h1>No existe el curso</h1>
        )
    )
}

export default Course