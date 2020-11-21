import react from "react"
import Curso from "./Curso"

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

const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        { cursos.map(c =>  (
        <Curso
            id={c.id}
            title={c.title}
            image={c.image}
            price={c.price}
            teacher={c.teacher}
        />
        )) }
    </div>
)

export default CourseGrid