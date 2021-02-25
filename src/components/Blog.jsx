import React from 'react';

function Blog(props) {
    return (
        <div className="component">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        </div>
    );
}

export default Blog;