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
        
            <div className='contact'>
                <Container>
                    <Row>
                        <Col className='mt-5 mb-5'>
                            <ContactForm />
                        </Col>
                    </Row>
                </Container>
            </div>
            
        </div>
    )
}

export default ContactPage; 