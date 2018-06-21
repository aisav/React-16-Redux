import React from 'react';

import './Message.css';

const post = (props) => {
    // console.log(props.match)
    return <article className="Post" onClick={props.clicked}>
            <h1 >{props.name}</h1>
            <h1 >{props.email}</h1>
            <div >{props.body}</div>
    </article>

};

export default post;