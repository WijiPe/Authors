import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const EditForm = (props) => {

    const [name, setName] = useState("");
    const history = useHistory()
    const {id} = props

    useEffect(()=>{
        axios.get(`http://localhost:8000/showOneAuthor/${id}`)
        .then(res=>setName(res.data.name))
        .catch(err=>console.log(err.response))
    },[id])


    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/update/${id}`, {
            name
        })
            .then(res=>{
                setName("")
                history.push("/");
            })
            .catch(err=>console.log(err.response.data))
    }

    return (
        <div>

            <form onSubmit= {onSubmitHandler}>
                <label><h4>Name:</h4></label>
                <input type="Text" onChange={(e)=>setName(e.target.value)} value={name}/>
                <button>Submit</button>
            </form>
            <button onClick = {(e)=>{e.preventDefault();history.push("/")}} >Cancel</button>
        </div>
    )
};

export default EditForm;