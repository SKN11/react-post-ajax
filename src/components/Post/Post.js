import React from 'react';
import './Post.css';
import {withRouter} from 'react-router-dom'

const post = (props) => {
    //console.log(props); to show route props
    return(
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>)
}

export default post;
//export default withRouter(post); //pas histor and route props to its tree
