import React, {Component} from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
// import {Grid, Paper} from 'material-ui';

import './Blog.css';
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import FullPost from './FullPost/FullPost'


const styles = {Paper: {padding: 20, marginTop: 10, marginBottom: 10}}

class Blog extends Component {

    render() {

        return (
            <div className="Blog">
                <Switch>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/posts" exact component={Posts}/>
                    <Route path="/posts/:postId" component={FullPost}/>
                    {/*For 404 <Route render={() => <h1>Not found</h1>}/>*/}
                    <Redirect from="/" to="/posts"/>

                </Switch>
            </div>
        );
    }
}

export default Blog;