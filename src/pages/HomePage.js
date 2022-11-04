import BrandLogo from '../img/logo.png';

import { 
    Container, 
    Row, 
    Col,
    Button
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
    return (
        <div className='home-page pb-5'>
            <h1 className='main-header pt-4'>TALK YOUR FEMSH!T</h1>
            <h2 className='second-header'>/tôk/ /yôr,yo͝or/ /fem/ /SHit/</h2>
            <h3 className='third-header'>a safe space where we uplift women and talk shit.</h3>
                <Container>
                    <Row>
                        <Col>
                            <img 
                                src={BrandLogo}
                                className='brand-logo'
                                alt='the podcast logo'
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button href='/live' className='live-button'>
                                Listen Now <FontAwesomeIcon icon={faHeadphones} />
                            </Button>
                        </Col>
                    </Row>
                </Container>
        </div>
    );
};

export default HomePage;