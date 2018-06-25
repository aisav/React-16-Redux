import React, {Component} from 'react';

import './NewMessage.css';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'

class NewMessage extends Component {
    state = {
        name: '',
        body: '',
    }

    postDataHandler = (e) => {
        e.preventDefault();
        const post = {
            name: this.state.name,
            body: this.state.body
        }
        this.props.onNewMessage(post)

    }

    render() {
        const {name, email, body} = this.state
        return (
            <form onSubmit={this.postDataHandler}>
                <h3>Create a New Message</h3>
                <TextField
                    id="name"
                    label="Name"
                    value={name}
                    onChange={(event) => this.setState({name: event.target.value})}
                    margin="normal"
                    fullWidth
                    required
                /><br/>
                <TextField
                    id="multiline"
                    label="Body"
                    multiline
                    rowsMax="4"
                    value={body}
                    onChange={(event) => this.setState({body: event.target.value})}
                    fullWidth
                    margin="normal"
                    required
                /><br/>
                <Button
                    type='submit'
                    color='primary'
                    variant='raised'
                >
                    Create
                </Button>
            </form>
        )
            ;
    }
}

export default NewMessage;