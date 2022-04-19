import { useEffect } from "react";
import { Row, Col, CardTitle, CardBody, Card } from "reactstrap"


const Contact = () => {
    useEffect(() => {
        document.title = "Contact";
    }, [])

    return (
        <div>
            <Row>
                <Col className="col-md-12">
                    <Card style={{ background: '#E9ECEF', border: "none" }}>
                        <CardBody>
                            <CardTitle tag="h1" className="text-center my-3">Detalhes de contato</CardTitle>
                            <div className="mt-3" style={{ fontWeight: 'bold' }}>Nome :<span style={{ fontWeight: 'normal' }}> Leandro Veloso, Wenderson Santos</span></div>
                            <div className="mt-3" style={{ fontWeight: 'bold' }}>Mobile :<span style={{ fontWeight: 'normal' }}> (91) 985650923, (91)993720104</span></div>
                            <div className="mt-3" style={{ fontWeight: 'bold' }}>Email :<span style={{ fontWeight: 'normal' }}> leandrovdsantos96@gmail.com, wenderson.santos@cameta.ufpa.br</span></div>
                            <div className="mt-3" style={{ fontWeight: 'bold' }}>GitHub :<span style={{ fontWeight: 'normal' }}><a href="https://github.com/Leandro-Veloso"> Leandro Veloso</a> <a href="https://github.com/wgustavosantos"> Gustavo Santos</a></span></div>
                            <div className="mt-3" style={{ fontWeight: 'bold' }}>Linkedin :<span style={{ fontWeight: 'normal' }}><a href="https://www.linkedin.com/in/sandhi-bandyopadhyay-6a18361b7/"> gustavo do labex</a></span></div>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
export default Contact;