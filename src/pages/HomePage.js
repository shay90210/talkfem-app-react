import BrandLogo from '../img/logo.png';

import { 
    Container, 
    Row, 
} from 'reactstrap';

const HomePage = () => {
    return (
        <div className='home-page'>
            <h1 className='main-header pt-4'>TALK YOUR FEMSH!T</h1>
            <h2 className='second-header'>/tôk/ /yôr,yo͝or/ /fem/ /SHit/</h2>
            <h3 className='third-header'>a safe space where we uplift women and talk shit.</h3>
                <Container>
                    <Row>
                        <img 
                            src={BrandLogo}
                            className='brand-logo'
                            alt='the podcast logo'
                        />
                    </Row>
                </Container>
        </div>
    );
};

export default HomePage;