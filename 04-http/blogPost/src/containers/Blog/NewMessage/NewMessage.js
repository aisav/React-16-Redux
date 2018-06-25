import React, {Component} from 'react';

import './NewMessage.css';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'

class NewMessage extends Component {
    state = {
        name: '',
        email: '',
        body: '',
    }

    postDataHandler = () => {
        const post = {
            name: this.state.name,
            body: this.state.body,
            email: this.state.email
        }
        this.props.onNewMessage(post)

    }

    render() {

        return (
            <div>
                <h3>Create a New Message</h3>
                <TextField
                    id="name"
                    label="Name"
                    value={this.state.name}
                    onChange={(event) => this.setState({name: event.target.value})}
                    margin="normal"
                    fullWidth
                /><br/>
                <TextField
                    id="multiline"
                    label="Body"
                    multiline
                    rowsMax="4"
                    value={this.state.body}
                    onChange={(event) => this.setState({body: event.target.value})}
                    fullWidth
                    margin="normal"
                /><br/>
                <Button
                    type='submit'
                    color='primary'
                    onClick={() => this.postDataHandler()}
                    variant='raised'
                >
                    Create
                </Button>
            </div>
        )
            ;
    }
}

export default NewMessage;