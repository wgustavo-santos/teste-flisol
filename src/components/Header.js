import { Card, CardBody } from "reactstrap";

const Header=()=>{
    return(
        <div>
            <Card className="my-2" style={{background:'#00D8FF'}}>
                <CardBody>
                    <h1 className="text-center my-2"> Sistema de gerenciamento de dados do aluno </h1>
                </CardBody>
            </Card>
        </div>
    )
}
export default Header;