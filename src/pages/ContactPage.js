import BeautifulWomanImg from '../img/womaninbrown.jpg';
import ContactForm from '../components/ContactForm';

import { 
    Container,
    Row,
    Col
} from 'reactstrap';

const ContactPage = () => {
    return (
        <div>
            <h1 className='main-header'>wom·an·ism</h1>
            <h2 className='second-header'>/ˈwo͝oməˌnizəm/</h2>
            <h3 className='third-header'>a form of feminism that emphasizes women's natural contribution to society.</h3>
        
        <Container  className='contact'>
            <Row>
                <Col>
                    <ContactForm />
                </Col>
                <Col className='mt-5 contact-image'>
                    <img 
                        src={BeautifulWomanImg}
                        width='600px'
                        alt='woman with afro wearing brown'
                    />
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default ContactPage; 