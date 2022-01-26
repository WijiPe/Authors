import React from 'react';
import AddForm from '../components/AddForm';
import {Link} from "react-router-dom"

const AddAuthor = () => {
    return (
        <div>
            <Link to={'/'}><h3>Home</h3></Link>
            <h2>Add a new author:</h2>
            <AddForm   />
        </div>
    )
};

export default AddAuthor;
