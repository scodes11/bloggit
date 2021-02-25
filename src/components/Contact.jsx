import React from 'react';

function Contact(props) {
    return (
        <div className="component">
        <h2>Contact</h2> 
        <p>{props.default}</p>    
        </div>  
    );
}

export default Contact;