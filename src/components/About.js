import { useEffect } from "react";
import { Row ,Col, CardTitle, CardBody, CardText, Card, CardSubtitle} from "reactstrap"

const About=()=>{
    useEffect(()=>{
        document.title="About";
    },[])
    return(
        <div>
            <Row>
                <Col className="col-md-12"> 
                <Card style={{background:'#E9ECEF',border:"none"}}>
                    <CardBody>
                     <CardTitle tag="h1" className="text-center my-3">Sobre o aplicativo</CardTitle>
                     <CardText className="text-center my-4">Uma API REST simples do Spring Boot para gerenciar os dados do aluno junto com um aplicativo React para consumir a API e o código-fonte está disponível<a href="https://github.com/SandhiBanerjee97/SpringBoot-RestAPI-StudentCRUD"> aqui</a> </CardText>
                     <CardSubtitle  tag="h5" className="text-center my-3">Tecnologias usadas</CardSubtitle>
                     <CardText className="text-center mt-4">Spring Boot , Spring Data JPA, React Js , Netlify, Heroku, Git e GitHub</CardText>
                    </CardBody>
                </Card>
                </Col>
                
            </Row>
        </div>
    );
}
export default About;