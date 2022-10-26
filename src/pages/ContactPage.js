import BeautifulWomanImg from '../img/womenandeyes.jpg';
import ContactForm from '../components/ContactForm';

import { 
    Container,
    Row,
    Col
} from 'reactstrap';

const ContactPage = () => {
    return (
        <div className='contact'>
            <h1 className='main-header'>wom·an·ism</h1>
            <h2 className='second-header'>/ˈwo͝oməˌnizəm/</h2>
            <h3 className='third-header'>a form of feminism that emphasizes women's natural contribution to society.</h3>
        
        <Container>
            <Row>
                <Col>
                    <ContactForm />
                </Col>
                <Col>
                    <img 
                        src={BeautifulWomanImg}
                        width='350px'
                        alt='two women with their eyes closed'
                    />
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default ContactPage; 