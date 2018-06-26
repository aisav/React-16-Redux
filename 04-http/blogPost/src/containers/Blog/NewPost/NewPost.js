import React, {Component} from 'react';
import axios from 'axios';

import {Redirect} from 'react-router-dom'
// import './NewPost.css';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submited: false
    }

    componentDidMount() {
        // console.log(this.props);
    }

    postDataHandler = () => {
        const post = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        }
        axios.post('/posts', post).then(response => {
            // console.log(response)
            this.setState({submited: true});
            // when we cannot setState
            // this.props.history.push({pathname: '/posts/'})

        })
    }

    render() {
        let redirect = null;
        if (this.state.submited) {
            redirect = <Redirect to="/posts"/>
        }
        const {title, content} = this.state
        return (
            <div>
                {redirect}
                <form onSubmit={this.postDataHandler}>
                    <h3>Create a New Message</h3>
                    <TextField
                        id="title"
                        label="Title"
                        value={title}
                        onChange={(event) => this.setState({title: event.target.value})}
                        margin="normal"
                        fullWidth
                        required
                    /><br/>
                    <TextField
                        id="multiline"
                        label="Content"
                        multiline
                        rowsMax="4"
                        value={content}
                        onChange={(event) => this.setState({content: event.target.value})}
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
            </div>


        );
    }
}

export default NewPost;