import React, { Component } from 'react';
import axios from 'axios';

import {Redirect} from 'react-router-dom'
import './NewMessage.css';

class NewPost extends Component {
    state = {
        name: '',
        email: '',
        content: '',
        submited: false
    }

    componentDidMount() {
        // console.log(this.props);
    }

    postDataHandler = () => {
        const post = {
            name: this.state.name,
            body: this.state.content,
            email: this.state.email
        }
        axios.post('/posts',post).then(response => {
            // console.log(response)
            this.setState({submited: true});
            // when we cannot setState
            // this.props.history.push({pathname: '/posts/'})

        })
    }

    render () {
        let redirect = null;
        if(this.state.submited) {
            redirect = <Redirect to="/posts"/>
        }
        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a Post</h1>
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Email</label>
                <input type="text" value={this.state.email} onChange={(event) => this.setState({email: event.target.value})} />
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;