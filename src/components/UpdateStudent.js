import { useEffect, useState } from "react";
import {Button, Container, Form, FormGroup,Input} from "reactstrap";
import axios from 'axios';
import base_url from "./../api/bootapi";
import { toast } from "react-toastify";
import {useHistory,useParams} from "react-router-dom";
const UpdateStudent=()=>{

    const {id}=useParams();



    useEffect(()=>{
        getSingleDataFromServer();
    },[])
   
    const history= useHistory();

    const[student,setStudent]=useState({})

    //getting data from server based on id
    const getSingleDataFromServer=()=>{
        document.title="Update Student";
        axios.get(`${base_url}/estudantes/${id}`).then(
            (response)=>{
                setStudent(response.data)
            },
            (error)=>{
                console.log(error)
                toast.error("server error")
            }
        )
    }
    //form handler
    const handleForm=(e)=>{
        updateDataOnServer(student);
        e.preventDefault();             //prevent page refresh on submit

    }
    //function to call server to post data
    const updateDataOnServer=(data)=>{
        axios.put(`${base_url}/estudantes`,data).then(
         (response)=>{
            toast.success("student data Updated");
            history.push('/view-student');
         },
         (error)=>{
            console.log(error);
            toast.error(error.message);
         }   
        ) 
    }

    return(
        <div>
            <h1 className="text-center my-3">Fill Student Detils</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label htmlFor ="studentName">Student name</label>
                    <Input  
                    type="text"
                    value={student.nome} 
                    placeholder="enter name here" 
                    maxLength="50"
                    name="studentName" 
                    id="studentname"
                    onChange={(e)=>{
                        setStudent({...student,nome:e.target.value});
                    }}></Input>
                </FormGroup>

                <FormGroup>
                    <label htmlFor="studentEmail">E-mail do aluno</label>
                    <Input 
                    type="text" 
                    value={student.email}
                    placeholder="enter email here" 
                    name="studentEmail" 
                    id="studentEmail" 
                    maxLength="50"
                    onChange={(e)=>{
                        setStudent({...student,email:e.target.value});
                    }}></Input>
                </FormGroup>
                
                <FormGroup>
                    <label htmlFor="studentDepartment">Curso Instituição</label>
                    <Input 
                    type="textarea" 
                    value={student.cursoInstituicao}
                    placeholder="enter name here" 
                    maxLength="50"
                    name="studentDepartment" 
                    id="studentDepartment" 
                    style={{height:'200'}}
                    onChange={(e)=>{
                        setStudent({...student,cursoInstituicao:e.target.value})
                    }}></Input>
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success" className="mr-2">Atualizar aluno</Button>
                </Container>
            </Form>
        </div>
    );
}
export default UpdateStudent;