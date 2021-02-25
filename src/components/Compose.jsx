import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';

function Compose(props) {

    const [blog, setBlog] = useState({
        title: "",
        content: ""
    });

    function handleChange(e) {
        const {name, value} = e.target;
        setBlog( prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        } );
        console.log(blog);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAdd(blog);
        props.history.push("/");
    }

    return (
        <div className="component">
        <h1>Compose</h1>   
        <form className="submit-form" action="/compose" method="post">
            <label>Title</label>
            <br/>
            <input onChange={handleChange} type="text" name="title" placeholder="BlogTitle" autoComplete='off'></input>
            <br/>
            <label>Post</label>
            <br/>
            <textarea onChange={handleChange} name="content" id="" cols="30" rows="5" autoComplete='off'></textarea>
            <br/>
            <button onClick={handleSubmit} className="submit-button" type="submit">Publish</button>
        </form> 
        </div>   
    );
}

export default withRouter(Compose);