import React from 'react';
import AddForm from '../components/AddForm';
import {Link} from "react-router-dom"

const AddAuthor = () => {
    return (
        <div>
            <h1>Favorite Author</h1>
            <Link to={'/'}><h3>Home</h3></Link>
            <h2>Add a new author:</h2>
            <AddForm   />
        </div>
    )
};

export default AddAuthor;
