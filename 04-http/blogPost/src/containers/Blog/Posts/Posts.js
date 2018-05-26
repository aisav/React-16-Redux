import React, {Component} from 'react';

// import axios from 'axios';
import axios from '../../../axios';

import Post from'../../../components/Post/Post'
import './Posts.css'



class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        console.log(this.props);
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
        this.setState({selectedPostId: id});

    }

    render() {
        var posts = this.state.posts.map(post => {
            return <Post key={post.id}
                         title={post.title}
                         author={post.author}
                         // match={this.props.match}
                         // {...this.props}
                         clicked={() => this.postSelectedHandler(post.id)}/>
        })

        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts;