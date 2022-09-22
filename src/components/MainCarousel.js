import Carousel from 'react-bootstrap/Carousel';
import ImageOne from '../img/womaninbrown.jpg';
import ImageTwo from '../img/womentrees.jpg';
import ImageThree from '../img/happywomen.jpg';

const MainCarousel = () => {
    return (
        <Carousel 
            fade 
            className='carousel-main'
        >
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ImageOne}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3>EPISODES EVERY FRIDAY</h3>
                    <p>Tune in every Friday @ 10pm to join a safe space and have conversations that will stimulate what it means to be a strong woman.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ImageTwo}
                alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>FOLLOW US ON SOCIAL MEDIA</h3>
                    <p>Follow us on Twitter to receive the latest updates or TikTok to watch us giving you the best advice you would need to hear in 2 minutes or less.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='third-carousel-slide'>
                <img
                className="d-block w-100"
                src={ImageThree}
                alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>CONTACT US</h3>
                    <p>Send us a message to see how you can join in the next conversation or to let us know how we're doing!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default MainCarousel;