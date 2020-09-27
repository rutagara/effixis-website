import { Container, Form, Button } from 'react-bootstrap'

const ContactForm = (props) => (
  <section id="contact-form" className={"standard-section bg-" + props.bgColor}>
    <Container>
        <h1 className="text-center px-5 mb-4">Contact us</h1>
        <Form className="p-5">
            <Form.Group>
                <Form.Control type="text" placeholder="Name"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Control type="email" placeholder="Email"></Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows="3" placeholder="Message"></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Send
            </Button>
        </Form>
    </Container>
  </section>
);

export default ContactForm;