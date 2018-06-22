import React, {Component} from 'react';

// import axios from 'axios';
import axios from '../../../axios';

// import {Link} from 'react-router-dom';

import Message from '../../../components/Message/Message'
import './Messages.css'

// import {Route} from 'react-router-dom'

class Messages extends Component {

    state = {
        comments: []
    }

    componentDidMount() {
        // console.log(this.props);
        let url = '/posts/' + this.props.match.params.postId + '/comments'
        let key = 'comments'+this.props.match.params.postId ;
        if (!localStorage.hasOwnProperty(key)) {
            axios.get(url).then(response => {
                const comments = response.data;
                const updatedComments = comments.map(comment => {
                    return {
                        ...comment,
                        author: 'Art'
                    }
                })
                this.setState({comments: updatedComments});
                localStorage.setItem(key , JSON.stringify(updatedComments))
            })
        }
        else {
            let comments = JSON.parse(localStorage.getItem(key));
            this.setState({comments: comments});
        }
    }

    componentWillUnmount() {
        localStorage.removeItem('comments' + this.props.match.params.postId )
    }

    commentSelectedHandler(id) {
        let url = '/posts/' + this.props.match.params.postId + '/comments/' + id
        // redirect to {pathName}
        this.props.history.push({pathname: url})
    }

    commentDeletedHandler(id) {
        // console.log("remove comment with: " + id)
        // this.setState({
        //     comments: this.state.comments.filter((c) => c.id !== id)
        // });
        // this.forceUpdate()
        // console.log("remove comment with: " + id)

        const list = [...this.state.comments];
        const updatedList = list.filter(item => item.id !== id);

        this.setState({ comments: updatedList });
        localStorage.setItem('comments'+this.props.match.params.postId , JSON.stringify(updatedList));

    }

    render() {
        // console.log(this.props.match.params.postId)
        // console.log(this.props.postId)
        let comments = this.state.comments.map(comment => {
            return (
                <div key={comment.id}>
                    <Message
                        name={comment.name}
                        email={comment.email}
                        body={comment.body}
                        // match={this.props.match}
                        // {...this.props}

                        deleted={() => this.commentDeletedHandler(comment.id)}/>
                </div>
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

export default Messages;