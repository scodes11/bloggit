import React from 'react';

function About(props) {
    return (
        <div className="component">
        <h2>About</h2>
        <p>{props.default}</p>    
        </div>   
    );
}

export default About;