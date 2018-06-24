import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

// import axios from 'axios';
import axios from '../../../axios';

// import {Link} from 'react-router-dom';
import NewMessage from '../NewMessage/NewMessage'
import EditMessage from '../EditMessage/EditMessage'

import Message from '../../../components/Message/Message'
import './Messages.css'

// import {Route} from 'react-router-dom'

class Messages extends Component {

    state = {
        comments: []
    }

    componentDidMount() {
        // console.log(this.props);

        let postscomments = [];
        let key = 'postscomments';
        if (!localStorage.hasOwnProperty('postscomments')) {
            localStorage.setItem(key, JSON.stringify(postscomments))
        } else {
            postscomments = JSON.parse(localStorage.getItem(key))
        }


        let url = '/posts/' + this.props.match.params.postId + '/comments'
        key = this.props.match.params.postId;
        if (postscomments[key] == null) {
            axios.get(url).then(response => {
                const comments = response.data;
                this.setState({comments: comments});
                postscomments[key] = comments
                localStorage.setItem('postscomments', JSON.stringify(postscomments))
            })
        }
        else {
            let comments = postscomments[key];
            this.setState({comments: comments});
        }
    }


    commentSelectedHandler(id) {
        let url = '/posts/' + this.props.match.params.postId + '/comments/' + id
        // redirect to {pathName}
        this.props.history.push({pathname: url, onEditMessage: this.editMessage})
    }

    commentDeletedHandler(id) {

        const list = [...this.state.comments];
        const updatedList = list.filter(item => item.id !== id);

        this.setState({comments: updatedList});

        let key = 'postscomments';
        let postscomments = JSON.parse(localStorage.getItem(key))
        let postId = this.props.match.params.postId
        postscomments[postId] = updatedList
        localStorage.setItem(key, JSON.stringify(postscomments));

    }


    editMessage(comment, postId, commentId) {

        let key = 'postscomments'
        let postscomments = JSON.parse(localStorage.getItem(key));
        let existingEntries = postscomments[postId];
        existingEntries.find(x => x.id == commentId).name = comment.name
        existingEntries.find(x => x.id == commentId).email = comment.email
        existingEntries.find(x => x.id == commentId).body = comment.body

        postscomments[key] = existingEntries;
        localStorage.setItem(key, JSON.stringify(postscomments));
        // this.setState({comments: existingEntries})
        let url = '/posts/' + this.props.match.params.postId + '/comments'
        this.props.history.push({pathname: url})


    }

    newMessage(comment) {

        let key = 'postscomments'
        let postId = this.props.match.params.postId
        let postscomments = JSON.parse(localStorage.getItem(key));
        let existingEntries = postscomments[postId];
        if (existingEntries == null) existingEntries = [];
        let cmn = {
            ...comment,
            id: existingEntries.length + 1
        }
        existingEntries.push(cmn);
        postscomments[key] = existingEntries;
        localStorage.setItem(key, JSON.stringify(postscomments));
        this.setState({comments: existingEntries})

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
                        deleted={() => this.commentDeletedHandler(comment.id)}
                        clicked={() => this.commentSelectedHandler(comment.id)}/>
                </div>
            );
        });

        this.newMessage = this.newMessage.bind(this)
        this.editMessage = this.editMessage.bind(this)

        // if (this.props.match.params.postId != null && this.props.match.params.commentsId != null) {
        //     return (
        //         <div>
        //             <Switch>
        //                 <Route path='/posts/:postId/comments/:commentId' exact component={EditMessage}/>
        //             </Switch>
        //         </div>
        //     )
        // }


        return (
            <div>
                <section className="Posts">
                    {comments}
                </section>
                <NewMessage onNewMessage={this.newMessage}/>
                <Switch>

                </Switch>
            </div>
        )
    }
}

export default Messages;