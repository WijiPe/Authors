import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Deletebutton from '../components/DeleteButton';
import EditButton from '../components/EditButton';
import {Link} from "react-router-dom"

const Main = () => {

    const [authors, setAuthors] = useState(null)
    const [refresh, setRefresh] = useState(false)

    const reloadList = ()=>{
        setRefresh(!refresh)
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/showAuthors`)
        .then(res=>{
            console.log(res.data)
            setAuthors(res.data)

        })
        .catch(err=>console.log(err.response))
    },[refresh])


    return (

        <div>
            <h1>Favorite authors</h1>
            <Link to={'/new'} ><h3>Add an author</h3></Link>
            <h2>We have quotes by:</h2>
                        <table>
                            <tr>
                                <th>Author</th>
                                <th>Action Available</th>
                            </tr>
                            {authors?
                                authors.map((author, i) =>(
                            <tr key ={i}>
                                <td>{author.name}</td>
                                <td>
                                    <EditButton id={author._id} />
                                    <Deletebutton id={author._id} reloadList ={reloadList}/>
                                </td>
                            </tr>
                        )):<p>Loading...</p>
                    }</table>
        </div>
    )
};

export default Main;
