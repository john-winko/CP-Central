import {useState} from "react";
import {signup} from "../utils/useAxios";
import {useNavigate} from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function Signup() {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState(null)
    const validRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    const errorText = "password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"

    const doSignUp = (e) => {
        e.preventDefault()
        if (e.target.password.value !== e.target.password2.value) {
            setErrorMessage("Passwords must match")
            return null
        }
        if (e.target.password.value.match(validRegex)) {
            setErrorMessage(null)
            signup(new FormData(e.target)).then((res) => {
                navigate("/login")
            })
        } else {
            setErrorMessage(errorText)
        }
    }

    return (
        <Container>
        <Row>
            <Col/>
            <Col xs={6}>
                <Row>
                {errorMessage && <p className={"errorDetails"}>{errorMessage}</p>}
                    <Form onSubmit={doSignUp}>
                    <Form.Control size="lg" type="text" placeholder="First Name" name="firstName" />                          
                        <Form.Control size="lg" type="text" placeholder="Last Name" name="lastName"/> 
                        <Form.Control size="lg" type="text" placeholder="Email" name="email"/> 
                        <Form.Control size="lg" type="text" placeholder="username" name="username" required/>                          
                        <Form.Control size="lg" type="password" placeholder="password" name="password" required/>   
                        <Form.Control size="lg" type="password" placeholder="password2" name="password2" required/>                           
                        <Button variant="primary" type="submit">Submit</Button>                            
                    </Form>
                </Row>
            </Col>
            <Col/>
        </Row>
    </Container>
    )
}

export default Signup