import React, {Component} from 'react';
import axios from 'axios';
import {Route, Link, Switch} from 'react-router-dom';

import './FullPost.css';
import Messages from '../Messages/Messages'
import NewMessage from '../NewMessage/NewMessage'
// import FullMessage from '../FullMessage/FullMessage'
import Button from 'material-ui/Button';

class FullPost extends Component {
    state = {
        loadedPost: {},
        comments: []
    }

    componentDidMount() {

        // console.log(this.props)
        this.loadData();
    }

    componentDidUpdate() {

        this.loadData();
    }

    loadData() {

        // console.log(this.props)
        if (this.props.match.params.postId) {
            if (!this.state.loadedPost || this.state.loadedPost.id !== +this.props.match.params.postId) {

                axios.get('/posts/' + this.props.match.params.postId)
                    .then(response => {
                        // console.log(response);
                        this.setState({loadedPost: response.data})
                    });
                axios.get('/posts/' + this.props.match.params.postId+'/comments')
                    .then(response => {
                        // console.log(response.data);
                        this.setState({comments: response.data})
                    });
            }
        }
    }

    deletePostHandler = () =>{
        axios.delete('/posts/' + this.props.match.params.postId).then(response => {
            // console.log(response);
        })
    }

    render() {
        let post = <p style={{textAlign: 'center'}}>Please select a Post </p>;

        if (this.props.match.params.postId) {
            post = <p style={{textAlign: 'center'}}>Loading ... </p>;
        }

        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <Button component={Link} to={'/posts/'+this.state.loadedPost.id+'/new-message'}
                            color="inherit">Add New Message</Button>


                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
{/*                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>*/}
                    <Switch>
                        {/*For 404 <Route render={() => <h1>Not found</h1>}/>*/}
                        <Route path="/posts/:postId/new-message" component={NewMessage}/>
                        <Route path="/posts/:postId/comments" component={Messages}/>
                    </Switch>
                </div>

            );
        }
        else {
            post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        }

        return post;
    }
}

export default FullPost;