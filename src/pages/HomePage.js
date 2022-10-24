import BrandLogo from '../img/logo.png';

import { Container, Row, Col, } from 'reactstrap';

const HomePage = () => {
    return (
        <div className='home-page'>
            <h1 className='main-header'>TALK YOUR FEMSH!T</h1>
            <Container>
                <Row>
                    <Col>
                        <img 
                            src={BrandLogo}
                            className='brand-logo'
                            alt='the podcast logo'
                        />
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;