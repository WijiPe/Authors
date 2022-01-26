import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddForm = () => {

    const [name, setName] = useState("");
    const history = useHistory()

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/addAuthor', {
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

export default AddForm;
