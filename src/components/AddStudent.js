import { useEffect, useState } from "react";
import {Button, Container, Form, FormGroup,Input} from "reactstrap";
import axios from 'axios';
import base_url from "./../api/bootapi";
import { toast } from "react-toastify";
import {useHistory} from "react-router-dom";
const AddStudent=()=>{

    useEffect(()=>{
        document.title="Add Student";
    },[])

    
    const [nome,setNome]=useState('');
    const [cursoInstituicao,setCursoInstituicao]=useState('');
    const [email,setEmail]=useState('');
    const history= useHistory();

    //function to call server to post data
    const postDataToServer=(data)=>{
        axios.post(`${base_url}/estudantes`,data).then(
         (response)=>{
            console.log(response);
            toast.success("student added");
            history.push('/view-student');
         },
         (error)=>{
            console.log(error);
            toast.error(error.message);
         }   
        ) 
    }


    //form handler
    const handleForm=(e)=>{
        const student={nome,cursoInstituicao,email}
        console.log(student)
        postDataToServer(student);
        e.preventDefault();             //prevent page refresh on submit

    }

    return(
        <div>
            <h1 className="text-center my-3">Preencha os detalhes do aluno</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label htmlFor ="studentName">Nome do aluno</label>
                    <Input 
                    type="text" 
                    placeholder="digite o nome aqui" 
                    name="studentName" 
                    id="studentname"
                    maxLength="50"
                    onChange={(e)=>{
                        setNome(e.target.value);
                    }}></Input>
                </FormGroup>

                <FormGroup>
                    <label htmlFor="studentEmail">E-mail do aluno</label>
                    <Input 
                    type="text" 
                    placeholder="digite o email aqui" 
                    name="studentEmail" 
                    id="studentEmail" 
                    maxLength="50"
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}></Input>
                </FormGroup>
                
                <FormGroup>
                    <label htmlFor="studentDepartment">Curso Instituição</label>
                    <Input 
                    type="textarea" 
                    placeholder="informe o curso e a instituição" 
                    name="studentDepartment" 
                    id="studentDepartment" 
                    maxLength="50"
                    style={{height:'200'}}
                    onChange={(e)=>{
                        setCursoInstituicao(e.target.value);
                    }}></Input>
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success" className="mr-2">Adicionar estudante</Button>
                    <Button color="warning" type="reset">Limpar</Button>
                </Container>
            </Form>
        </div>
    );
};
export default AddStudent;