import React, {Component} from 'react';

// import axios from 'axios';
import axios from '../../../axios';

// import {Link} from 'react-router-dom';

import Post from '../../../components/Post/Post'
// import FullPost from '../FullPost/FullPost'
// import './Posts.css'

// import {Route} from 'react-router-dom'

class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        // console.log(this.props);
        axios.get('/posts').then(response => {
            const posts = response.data                //.slice(0, 8);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Artur Isaverdyan'
                }
            })
            this.setState({posts: updatedPosts});
        })
    }

    postSelectedHandler(id) {

        // redirect to {pathName}
        this.props.history.push({pathname: '/posts/'+id+ '/comments'})
    }

    render() {
        var posts = this.state.posts.map(post => {
            return (
            //    <Link to={'/posts'+post.id}>
                <div>
                    <Post key={post.id}
                          title={post.title}
                          author={post.author}
                        // match={this.props.match}
                        // {...this.props}
                          clicked={() => this.postSelectedHandler(post.id)}/>
                </div>
            //    </Link>
            );
        });

        return (
            <div>
            <section className="Posts">
                {posts}
            </section>
            </div>
        )
    }
}

export default Posts;