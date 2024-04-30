import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";

const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);

const gatos = [
    {
        name: "Gato 1",
        slug: 'gato-1',
        description: "Celular 1",
        picture: 'https://img.global.news.samsung.com/mx/wp-content/uploads/2019/01/SM-J410F_004_L-Perspective_Blue1.jpg'
    },
    {
        name: "Gato 2",
        slug: 'gato-2',
        description: "Es un celular Celular 2",
        picture: 'https://static.nationalgeographic.es/files/styles/image_3200/public/nationalgeographic_1468962.jpg?w=1600&h=900'
    },
    {
        name: "Gato 3",
        slug: 'gato-3',
        description: "Descripcion Celular 3",
        picture: 'https://fotografias.lasexta.com/clipping/cmsimages02/2019/01/25/DB41B993-B4C4-4E95-8B01-C445B8544E8E/69.jpg?crop=4156,2338,x0,y219&width=1280&height=720&optimize=high&format=webply'
    },
];

const Main = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
    }

    return <main>
        <Carousel>
            {
                gatos.map(it => {
                    return (<Carousel.Item onClick={(e) => {
                        e.preventDefault(); handleClick(it.slug)
                    }}>
                        <img className='w-100 dark-image' src={it.picture}></img>
                        <Carousel.Caption>
                            <h3>{it.name}</h3>
                            <p>{it.description}</p>
                            <button className="btn btn-primary" >Ver detalle</button>
                        </Carousel.Caption>
                    </Carousel.Item>);
                })
            }
        </Carousel>
    </main >;
}

export default Main;