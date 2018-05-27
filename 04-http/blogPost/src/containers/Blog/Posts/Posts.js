import React, {Component} from 'react';

// import axios from 'axios';
import axios from '../../../axios';

import {Link} from 'react-router-dom';

import Post from '../../../components/Post/Post'
import FullPost from '../FullPost/FullPost'
import './Posts.css'

import {Route} from 'react-router-dom'

class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        // console.log(this.props);
        axios.get('/posts').then(response => {
            const posts = response.data.slice(0, 8);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Art'
                }
            })
            this.setState({posts: updatedPosts});
        })
    }

    postSelectedHandler(id) {
        this.props.history.push({pathname: '/posts/'+id})
    }

    render() {
        var posts = this.state.posts.map(post => {
            return (
            //    <Link to={'/posts'+post.id}>
                    <Post key={post.id}
                          title={post.title}
                          author={post.author}
                        // match={this.props.match}
                        // {...this.props}
                          clicked={() => this.postSelectedHandler(post.id)}/>
            //    </Link>
            );
        });

        return (
            <div>
            <section className="Posts">
                {posts}
            </section>
                <Route path={this.props.match.url + '/:postId'} exact component={FullPost}/>
            </div>
        )
    }
}

export default Posts;