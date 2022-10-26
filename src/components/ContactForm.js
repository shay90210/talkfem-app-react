import { 
    Form,
    FormGroup,
    Label,
    Col,
    Input,
    Button
 } from "reactstrap"

import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_83toxj7', 'template_et99jyv', e.target, 'HsQ73zypgOlmQBhhb')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }

    return (
        <div>
            <Form
                onSubmit={sendEmail}
                style={{
                    paddingBottom: '30px',
                }}
            >
                <FormGroup row>
                    <Label for='firstName'>
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
                <FormGroup row>
                    <Label for='lastName'>
                        Last Name 
                    </Label>
                    <Col sm={10}>
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
                    <Col sm={10}>
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
                    <Col sm={10}>
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
                    <Col sm={10}>
                        <Input 
                            id='messageText'
                            name='text'
                            placeholder='Leave a message here'
                            type='textarea'
                        />                    
                    </Col>
                </FormGroup>
                <Col sm={4}>
                    <Button type='submit'>
                        Submit
                    </Button>
                </Col>
            </Form>
        </div>
    )
}

export default ContactForm;