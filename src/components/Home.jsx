import React from 'react';
import Blog from './Blog';

function Home(props) {
    console.log(props.blogs)
    return (
        <div className="component">
        <h1>Home</h1>
        <p>{props.default}</p> 
        {props.blogs.map(blog => {
            return (
              <Blog title={blog.title} content={blog.content}/>
            )
        })}
        </div>      
    );
}

export default Home;