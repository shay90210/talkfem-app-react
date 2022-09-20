import { Container, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
 
const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/podcast'>Podcast</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <h5>Social</h5>
                        <a 
                            className='btn btn-social-icon'
                            href='https://www.tiktok.com/@talkyourfemsht?lang=en'
                        >
                            <i className='fa fa-tiktok' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon'
                            href='https://twitter.com/TalkYourFemSHT'
                        >
                            <i className='fa fa-twitter' />
                        </a>{' '}
                        <a 
                            className='btn btn-social-icon'
                            href="https://anchor.fm/shannon-bentley"
                        >
                            <i className='fa fa-spotify' />
                        </a>{' '}
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer