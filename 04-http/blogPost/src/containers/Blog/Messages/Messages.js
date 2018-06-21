import React, {Component} from 'react';

// import axios from 'axios';
import axios from '../../../axios';

// import {Link} from 'react-router-dom';

import Message from '../../../components/Message/Message'
import FullPost from '../FullPost/FullPost'
import './Messages.css'

import {Route} from 'react-router-dom'

class Posts extends Component {

    state = {
        comments: []
    }

    componentDidMount() {
        // console.log(this.props);
        let url = '/posts/'+this.props.match.params.postId+'/comments'
        axios.get(url).then(response => {
            const comments = response.data.slice(0, 8);
            const updatedComments = comments.map(comment => {
                return {
                    ...comment,
                    author: 'Art'
                }
            })
            this.setState({comments: updatedComments});
        })
    }

    postSelectedHandler(id) {
        let url = '/posts/'+this.props.match.params.postId+'/comments/'+id
        // redirect to {pathName}
        this.props.history.push({pathname: url})
    }

    render() {
        console.log("++++++++++++++++++++++++")
        console.log(this.props.match.params.postId)
        console.log("++++++++++++++++++++++++")
        // console.log(this.props.postId)
        var comments = this.state.comments.map(comment => {
            return (
                    <Message name={comment.name}
                          email={comment.email}
                          body={comment.body}
                        // match={this.props.match}
                        // {...this.props}
                          clicked={() => this.postSelectedHandler(comment.id)}/>
            );
        });

        return (
            <div>
            <section className="Posts">
                {comments}
            </section>
            </div>
        )
    }
}

export default Posts;