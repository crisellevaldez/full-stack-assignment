import { React, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Navbar from '../components/navbar/Navbar'

const Login = () => {
    const [error, setError] = useState(null)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }

        else {
            setError(null)
        }
    }

    return (
        <>
            <Navbar />
            <Container className="mt-5">
                <Row className="d-flex justify-content-center">
                    <Col md={6} lg={4}>
                        <h4 className="text-center mb-5"> SIGN IN </h4>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group as={Row} className="mb-3">
                                <Col lg="12" className="mb-3">
                                    <label> Email </label>
                                    <Form.Control type="text" className="mt-1 border border-secondary" id="email" name="email" value={email} onChange={onChange} />
                                </Col>
                                <Col lg="12" className="mb-3">
                                    <label> Password </label>
                                    <Form.Control type="password" className="mt-1 border border-secondary" id="password" name="password" value={password} onChange={onChange} />
                                </Col>
                            </Form.Group>

                            <div className="d-flex justify-content-end">
                                <Button variant="primary" type="submit">
                                    Sign In
                                </Button>
                            </div>

                            {error && 
                                <div className="alert alert-danger mt-3" role="alert">
                                    {error}
                                </div>
                            }
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login