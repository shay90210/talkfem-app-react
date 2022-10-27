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
                className='contact-form'
            >
                <FormGroup row>
                    <Label for='firstName' className='form-label'>
                        First Name 
                    </Label>
                    <Col sm={8}>
                        <Input 
                            id='firstName'
                            name='firstName'
                            placeholder='First Name'
                            type='text'
                        />                    
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='lastName' className='form-label'>
                        Last Name 
                    </Label>
                    <Col sm={8}>
                        <Input 
                            id='lastName'
                            name='lastName'
                            placeholder='Last Name'
                            type='text'
                        />                    
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='emailAddress' className='form-label'>
                        Email
                    </Label>
                    <Col sm={8}>
                        <Input 
                            id='emailAddress'
                            name='emailAddress'
                            placeholder='Email'
                            type='email'
                        />                    
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='phoneNum' className='form-label'>
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
                    <Label for='messageArea' className='form-label'>
                        Message
                    </Label>
                    <Col sm={8}>
                        <Input 
                            id='messageText'
                            name='messageText'
                            placeholder='Leave a message here'
                            type='textarea'
                        />                    
                    </Col>
                </FormGroup>
                <Col sm={4}>
                    <Button type='submit' className='form-button'>
                        Submit
                    </Button>
                </Col>
            </Form>
        </div>
    )
}

export default ContactForm;