import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../Assets/Images/a.png'
import img2 from '../../../Assets/Images/e.png'
import img from '../../../Assets/Images/b.png'


const Carusel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img}
                    alt="Second slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Third slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
};

export default Carusel;