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
                    marginTop: '70px',
                    marginBottom: '70px'
                }}>
                <p
                    style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        paddingTop: '30px'
                    }}
                >Contact us for specific topics, advice, or if you would like to join our show!</p>
                <Form
                    style={{
                        paddingBottom: '30px',
                    }}
                >
                    <FormGroup row>
                        <Label for='firstName'>
                            First Name 
                        </Label>
                        <Col sm={8}>
                            <Input 
                                id='firstName'
                                name='name'
                                placeholder='First Name'
                                type='text'
                            />                    
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for='lastName'>
                            Last Name 
                        </Label>
                        <Col sm={8}>
                            <Input 
                                id='lastName'
                                name='name'
                                placeholder='Last Name'
                                type='text'
                            />                    
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for='emailAddress'>
                            Email
                        </Label>
                        <Col sm={8}>
                            <Input 
                                id='emailAddress'
                                name='email'
                                placeholder='Email'
                                type='email'
                            />                    
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for='phoneNum'>
                            Phone Number
                        </Label>
                        <Col sm={8}>
                            <Input 
                                id='phoneNum'
                                name='phoneNum'
                                placeholder='Phone Number'
                                type='phoneNum'
                            />                    
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for='messageArea'>
                            Message
                        </Label>
                        <Col sm={8}>
                            <Input 
                                id='messageText'
                                name='text'
                                placeholder='Leave a message here'
                                type='textarea'
                            />                    
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </div>
    )
}

export default ContactPage; 