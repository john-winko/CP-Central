import { useContext } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { AuthContext } from "../context/AuthProvider";

function LoginPage() {
    let { signin } = useContext(AuthContext)

    return (
        <Container>
            <Row>
                <Col/>
                <Col xs={6}>
                    <Row>
                        <Form onSubmit={signin}>
                            <Form.Control size="lg" type="text" placeholder="username" name="username" />                          
                            <Form.Control size="lg" type="password" placeholder="password" name="password" />                            
                            <Button variant="primary" type="submit">Submit</Button>                            
                        </Form>
                    </Row>
                </Col>
                <Col/>
            </Row>
        </Container>
    );
}

export default LoginPage