import React, {Component} from 'react';
// import axios from 'axios';

import './EditMessage.css';
// import Messages from '../Messages/Messages'
// import FullMessage from '../FullMessage/FullMessage'
// import Button from 'material-ui/Button';

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

    componentDidMount() {

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
        if (existingEntries != null){
            cmnt = existingEntries.find(x => x.id == commentId)
        }

        this.setState({loadedComment: cmnt})
    }

    // onEditMessage
    postDataHandler() {
        let postId = this.props.match.params.postId
        let commentId = this.props.match.params.commentId
        console.log(this.state.loadedComment)
        console.log(this.props)
        console.log("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||")
        let cm = {
            name: this.state.name,
            email: this.state.email,
            body: this.state.body
        }
        this.props.location.onEditMessage(cm, postId, commentId)

    }

    render() {
        let post = <p style={{textAlign: 'center'}}>Loading ... </p>;

        if (this.state.loadedComment) {
            post = (
                <div className="NewPost">
                    <h1>Edit the Message</h1>
                    <label>Name</label>
                    <input type="text" defaultValue={this.state.loadedComment.name}
                           onChange={(event) => this.setState({name: event.target.value})}/>
                    <label>Content</label>
                    <textarea rows="4" defaultValue={this.state.loadedComment.body}
                              onChange={(event) => this.setState({body: event.target.value})}/>
                    <label>Email</label>
                    <input type="text" defaultValue={this.state.loadedComment.email}
                           onChange={(event) => this.setState({email: event.target.value})}/>
                    <button onClick={() => this.postDataHandler()}>Update</button>
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