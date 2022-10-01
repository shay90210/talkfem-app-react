import { Container, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
 
const Footer = () => {
    return (
        <footer className='site-footer pt-4'>
            <Container>
                <Row>
                    <Col className='text-center'>
                        <h5>Social</h5>
                        <div className='d-flex justify-content-evenly pb-4'>
                            <a 
                                className='btn btn-social-icon'
                                href='https://www.tiktok.com/@talkyourfemsht?lang=en'
                            >
                                <FontAwesomeIcon icon={faTiktok} />
                            </a>
                            <a
                                className='btn btn-social-icon'
                                href='https://twitter.com/TalkYourFemSHT'
                            >
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a 
                                className='btn btn-social-icon'
                                href='https://anchor.fm/shannon-bentley'
                            >
                                <FontAwesomeIcon icon={faSpotify} />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer