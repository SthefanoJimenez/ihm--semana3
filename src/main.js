import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";

const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);

const gatos = [
    {
        name: "celular 1",
        slug: 'gato-1',
        description: "Celular 1",
        picture: 'https://img.global.news.samsung.com/mx/wp-content/uploads/2019/01/SM-J410F_004_L-Perspective_Blue1.jpg'
    },
    {
        name: "celular 2",
        slug: 'gato-2',
        description: "Es un celular Celular 2",
        picture: 'https://images.samsung.com/is/image/samsung/assets/pe/mobile/pfs/08-01-ft12-S23-FE-mo-720x540.jpg?$FB_TYPE_J_F_MO_JPG$'
    },
    {
        name: "Celular 3",
        slug: 'gato-3',
        description: "Descripcion Celular 3",
        picture: 'https://www.efe.com.pe/media/catalog/product/2/8/286440-800-auto.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700'
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