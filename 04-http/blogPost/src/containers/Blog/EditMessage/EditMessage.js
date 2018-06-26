import React, {Component} from 'react';
// import axios from 'axios';

import './EditMessage.css';
// import Messages from '../Messages/Messages'
// import FullMessage from '../FullMessage/FullMessage'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'

class EditMessage extends Component {
    state = {
        loadedComment: {},
        name: '',
        body: '',
        email: ''
    }

    componentWillMount() {

        // console.log(this.props)
        this.loadData();
    }


    loadData() {
        let key = 'postscomments'
        let postId = this.props.match.params.postId
        let commentId = this.props.match.params.commentId
        let postscomments = JSON.parse(localStorage.getItem(key));
        let existingEntries = postscomments[postId];
        let cmnt;
        if (existingEntries != null) {
            cmnt = existingEntries.find(x => x.id == commentId)
        }

        this.setState({loadedComment: cmnt})
        if(cmnt) {
            this.setState({name: cmnt.name})
            this.setState({body: cmnt.body})
            this.setState({email: cmnt.email})
        }
        else {
            let url = '/posts/' + this.props.match.params.postId + '/comments/'
            this.props.history.push({pathname: url})
        }
    }

    postDataHandler() {
        let postId = this.props.match.params.postId
        let commentId = this.props.match.params.commentId
        // console.log(this.state.loadedComment)
        // console.log(this.props)
        let cm = {
            name: this.state.name,
            email: this.state.email,
            body: this.state.body
        }
        if(this.props.location.onEditMessage) {
            this.props.location.onEditMessage(cm, postId, commentId)
        }
        let url = '/posts/' + this.props.match.params.postId + '/comments'
        this.props.history.push({pathname: url})
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        let post = <p style={{textAlign: 'center'}}>Loading ... </p>;

        if (this.state.loadedComment) {
            post = (
                <div>
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
                        Update
                    </Button>
                </div>

            );
        }
        else {
            post = <p style={{textAlign: 'center'}}>Please select a Comment!</p>;
        }

        return post;
    }
}

export default EditMessage;