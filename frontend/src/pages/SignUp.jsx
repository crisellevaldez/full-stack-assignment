import { React, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Navbar from '../components/navbar/Navbar'

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        birthDay: '',
        email: '',
        password: ''
    })

    const { firstName, middleName, lastName, gender, birthDay, email, password } = formData
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <>
            <Navbar />
            <Container className="mt-5">
                <Row className="d-flex justify-content-center">
                    <Col lg={8}>
                        <h4 className="text-center mb-5"> SIGN UP </h4>
                        <Form>
                            <Form.Group as={Row} className="mb-3">
                                <Col md="6" lg="4" className="mb-3">
                                    <label> First name </label>
                                    <Form.Control type="text" className="mt-1 border border-secondary" id="firstName" name="firstName" value={firstName} onChange={onChange} />
                                </Col>
                                <Col md="6" lg="4" className="mb-3">
                                    <label> Middle name </label>
                                    <Form.Control type="text" className="mt-1 border border-secondary" id="middleName" name="middleName" value={middleName} onChange={onChange} />
                                </Col>
                                <Col md="6" lg="4" className="mb-3">
                                    <label> Last name </label>
                                    <Form.Control type="text" className="mt-1 border border-secondary" id="lastName" name="lastName" value={lastName} onChange={onChange} />
                                </Col>
                                <Col md="6" className="mb-3">
                                    <label> Gender </label>
                                    <Form.Select className="mt-1 border border-secondary" id="gender" name="gender" value={gender} onChange={onChange} >
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </Form.Select>
                                </Col>
                                <Col md="6" className="mb-3">
                                    <label> Birthday </label>
                                    <Form.Control type="date" className="mt-1 border border-secondary" id="birthDay" name="birthDay" value={birthDay} onChange={onChange} />
                                </Col>
                                <Col md="6" className="mb-3">
                                    <label> Email </label>
                                    <Form.Control type="email" className="mt-1 border border-secondary" id="email" name="email" value={email} onChange={onChange} />
                                </Col>
                                <Col md="6" className="mb-3">
                                    <label> Password </label>
                                    <Form.Control type="password" className="mt-1 border border-secondary" id="password" name="password" value={password} onChange={onChange} />
                                </Col>
                            </Form.Group>

                            <Button variant="primary" type="submit" className="float-end">
                                Sign Up
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SignUp