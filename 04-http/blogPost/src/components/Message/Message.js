import React from 'react';

import './Message.css';
import Button from 'material-ui/Button';
import Delete from 'material-ui/Icon';
import {
    blueGrey800,
    red600,
} from 'material-ui/styles';
import Checkbox from 'material-ui/Checkbox'
import DeleteIcon from 'material-ui-icons/Delete';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import {ListItem} from 'material-ui/List';
import {ListItemText} from 'material-ui/List';

const listElementStyles = {
    color: blueGrey800,
    fontSize: 18,
    lineHeight: '24px',
}

const listElementCheckedStyles = {
    ...listElementStyles,
    textDecoration: 'line-through',
}


const post = (props) => {
    const {body} = props;

    return (
        <div >
            <ListItem style={{width: '90%'}} button onClick={props.clicked}>
                <ListItemText primary={body}/>
                <IconButton tooltip='remove' onClick={props.deleted}>
                    <DeleteIcon/>
                </IconButton>
                <Divider  absolute />

            </ListItem>
        </div>

    )

};

export default post;