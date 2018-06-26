import React from 'react';

// import './Post.css';
import Divider from 'material-ui/Divider';
import {ListItem} from 'material-ui/List';
import {ListItemText} from 'material-ui/List';

const post = (props) => {
    // console.log(props.match)
    return (

        <div >
            <ListItem style={{width: '90%'}} button onClick={props.clicked}>
                <ListItemText primary={props.title}/>
                <Divider  absolute />

            </ListItem>
        </div>
    )


};

export default post;