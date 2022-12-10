import { useState } from 'react'
import { Container, Col, Row, Form, Button, Card } from 'react-bootstrap'
import { useOpenAI } from '../../hooks/useOpenAI'
import Navbar from '../navbar/Navbar'

const TitleGenerator = () => {
    const { openAI, isLoading, error } = useOpenAI()
    const [topic, setTopic] = useState("");
    const [response, setResponse] = useState("Thesis title here. . . . .")


    const generateTitle = async (e) => {
        e.preventDefault()

        const title = await openAI(topic)
        if (title.message !== undefined){
            setResponse(title.message)
        }
    }

    return (
        <>
            <Navbar />
            <Container className="mt-5">
                <Row className="d-flex justify-content-center">
                    <Col lg="8">
                        <Form onSubmit={generateTitle}>
                            {error &&
                                <div className="alert alert-danger mt-3" role="alert">
                                    {error}
                                </div>
                            }

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="fs-5 form-label" > Thesis Title Generator</Form.Label>
                                <Form.Control className="p-2 border-secondary" type="text" placeholder="Topic/Tags" onChange={e => setTopic(e.target.value)}></Form.Control>
                                <Form.Text className="text-muted">
                                    Enter a topic e.g. e-commerce, school, etc.
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


