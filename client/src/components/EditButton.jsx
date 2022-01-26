import React from 'react';
import { useHistory } from 'react-router-dom';


const EditButton = (props) => {

    const {id} = props
    const history = useHistory()

    const clickHandler = (e) => {
        e.preventDefault();
        history.push(`/edit/${id}`);
    }

    return (
        <div>
            <button onClick={clickHandler}>Edit</button>
        </div>
    )
};

export default EditButton;
