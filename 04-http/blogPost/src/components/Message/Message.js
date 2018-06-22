import React from 'react';

import './Message.css';
import Button from 'material-ui/Button';
import Delete from 'material-ui/Icon';

const post = (props) => {
    // console.log(props.match)
    return <article className="Post" >
            <Button  color="secondary" onClick={props.deleted}>
                Delete
                <Delete />
            </Button>



        <h1 >{props.name}</h1>
            <h1 >{props.email}</h1>
            <div >{props.body}</div>
    </article>

};

export default post;