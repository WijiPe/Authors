import React from 'react';
import EditForm from '../components/EditForm';
import { useParams } from 'react-router-dom';
import {Link} from "react-router-dom"

const EditAuthor = () => {

    const {id} = useParams()

    return (
        <div>
            <h1>Favorite Author</h1>
            <Link to={'/'}><h2>Home</h2></Link>
            <h2>Edit author:</h2>
            <EditForm id={id} />
        </div>
        
    )
    
};

export default EditAuthor;
