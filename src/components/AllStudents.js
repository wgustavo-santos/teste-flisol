import { useState,useEffect } from "react"
import { toast } from 'react-toastify';
import Student from "./Student"
import base_url from "./../api/bootapi";
import axios from "axios";
const AllStudents=()=>{

    const[students,setStudents]=useState([])
    
    useEffect(()=>{
        document.title="All Students";
        getAllStudentsFromServer();
    },[])
    
    //function to get all studnts from server
    const getAllStudentsFromServer=()=>{
        axios.get(`${base_url}/estudantes`).then(
            (response)=>{
                toast.success("All Student data loaded");
                setStudents(response.data)
            },
            (error)=>{
                console.log(error)
                toast.error("server error")
            }
        )
    }

    const updateStudentsStateList=(id)=>{         // function to remove data from state 
        setStudents(students.filter((s)=>s.id !==id))
    }           

    return(
        <div>
            <h1 className="text-center">Todos os alunos</h1>
            <p className="text-center">A lista de alunos de alunos é a seguinte</p>
            {
                students.length>0? students.map((item)=>(
                    <Student key={item.id} student={item} updateState={updateStudentsStateList}/>
                )) :"Carregando..... por favor, seja paciente😅, o Heroku demora um pouco para carregar o aplicativo no servidor"
            }
        </div>
    )
}
export default AllStudents;
