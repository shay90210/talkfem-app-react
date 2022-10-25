import { 
    Form, 
    FormGroup, 
    Label, 
    Input,
    Col
} from "reactstrap";

const ContactPage = () => {
    return (
        <div className='contact'>
            <h1 className='main-header'>wom·an·ism</h1>
            <h2 className='second-header'>/ˈwo͝oməˌnizəm/</h2>
            <h3 className='third-header'>a form of feminism that emphasizes women's natural contribution to society.</h3>
        
            <div 
                style={{ 
                    backgroundColor: 'white',
                    marginTop: '70px'
                }}>
                <p
                    style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        paddingTop: '30px'
                    }}
                >Contact us for specific topics, advice, or if you would like to join our show!</p>
                <Form>
                    <FormGroup row>
                        <Label for='firstName' sm={2}>
                            First Name 
                        </Label>
                        <Col sm={10}>
                            <Input 
                                id='firstName'
                                name='name'
                                placeholder='First Name'
                                type='text'
                            />                    
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </div>
    )
}

export default ContactPage; 