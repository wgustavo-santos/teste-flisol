import axios from "axios";
import { useEffect } from "react";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import base_url from "./../api/bootapi";
import {Jumbotron,Container} from "reactstrap";
const Home=()=>{
    useEffect(()=>{
        getHomeMessage();
        document.title="Home || FLISOL CAMETÁ UFPA";
    },[])
    const getHomeMessage=()=>{
        axios.get(`${base_url}/estudantes/home`).then(
            (response)=>{
                toast.success(response.data);
            },
            (error)=>{
                console.log(error)
                toast.error("erro de conexão")
            }
        )
    }
    return(
        <div>
            <Jumbotron className="text-center">
                <h1>Bem-vindo ao aplicativo</h1>
                <p>Este aplicativo é para fins de aprendizado</p>
                <Container>
                <Link to="/add-student" className="btn btn-outline-primary" color="primary" outline>Comece aqui</Link>
                </Container>
            </Jumbotron>
        </div>
    )
}
export default Home;