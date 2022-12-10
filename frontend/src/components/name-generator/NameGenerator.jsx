import { useState } from 'react'
import { Container, Col, Row, Form, Button, Card } from 'react-bootstrap'
import { useOpenAIName } from '../../hooks/useOpenAI'
import Navbar from '../navbar/Navbar'

const TitleGenerator = () => {
    const { openAI, isLoading, error } = useOpenAIName()
    const [kName, setKName] = useState("");
    const [response, setResponse] = useState("Name here. . . . .")


    const generateName = async (e) => {
        e.preventDefault()

        const name = await openAI(kName)
        if (name.message !== undefined){
            setResponse(name.message)
        }
    }

    return (
        <>
            <Navbar />
            <Container className="mt-5">
                <Row className="d-flex justify-content-center">
                    <Col lg="8">
                        <Form onSubmit={generateName}>
                            {error &&
                                <div className="alert alert-danger mt-3" role="alert">
                                    {error}
                                </div>
                            }

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="fs-5 form-label" > Korean Name Generator</Form.Label>
                                <Form.Control className="p-2 border-secondary" type="text" placeholder="Name/Nickname" onChange={e => setKName(e.target.value)}></Form.Control>
                                <Form.Text className="text-muted">
                                    Enter your name or nickname.
                                </Form.Text>

                                <Button className="m-3 rounded-1" variant="primary" type="submit">
                                    {isLoading && <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>}
                                    Submit
                                </Button>
                            </Form.Group>
                        </Form>

                        <Card className="border-secondary">
                            <Card.Body> {response} </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default TitleGenerator


