import { Link } from "react-router-dom";
import {ListGroup} from "reactstrap";
const Menu=()=>{
    return(
        <ListGroup>
        <Link className="list-group-item list-group-item-action" to="/" action>Pagina inicial</Link>
        <Link className="list-group-item list-group-item-action" to="/add-student" action>Adcionar aluno</Link>
        <Link className="list-group-item list-group-item-action" to="/view-student" action>Listar estudantes</Link>
        <Link className="list-group-item list-group-item-action" to="/about" action>Sobre</Link>
        <Link className="list-group-item list-group-item-action" to="/contact" action>Contato</Link>
      </ListGroup>
    );
}
export default Menu;