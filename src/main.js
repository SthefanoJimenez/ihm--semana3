import Carousel from 'react-bootstrap/Carousel';


const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);

const gatos = [
    {
        name: "Gato 1",
        description: "Descripcion Gato 1"
    },
    {
        name: "Gato 2",
        description: "Descripcion Gato 2"
    },
    {
        name: "Gato 3",
        description: "Descripcion Gato 3"
    },
];

const Main = () => {
    return <main>
        <Carousel>
            {
                gatos.map(it => {
                    return (<Carousel.Item>
                        <img className='w-100 dark-image' src='https://s1.eestatic.com/2020/05/18/como/gatos-mascotas-trucos_490961518_152142875_1706x960.jpg'></img>
                        <Carousel.Caption>
                            <h3>{it.name}</h3>
                            <p>{it.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>);
                })
            }
        </Carousel>
    </main>;
}

export default Main;