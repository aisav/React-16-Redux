import React, {Component} from 'react';
// import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import {Grid, Paper} from 'material-ui';

import './Blog.css';
// import Posts from './Posts/Posts'
import LeftPaine from './LeftPane'
import RightPane from './RightPane'

const styles = {Paper: {padding: 20, marginTop: 10, marginBottom: 10}}

class Blog extends Component {

    render() {

        return (
            <Grid container sm={12}>
                <Grid item sm={6}>
                    <LeftPaine styles={styles}/>
                </Grid>
                <Grid item sm={6}>
                    <RightPane styles={styles}/>
                </Grid>
            </Grid>
            // <div className="Blog">
            //     <header>
            //         <nav>
            //             <ul>
            //                 <li><NavLink to="/posts" exact activeClassName="active">Posts</NavLink></li>
            //                 <li><NavLink
            //                     to={{
            //                         pathname: '/new-post',
            //                         hash: '#submit',
            //                         search: '?quick-submit=true'
            //                     }}>New Post</NavLink></li>
            //             </ul>
            //         </nav>
            //     </header>
            //     <Switch>
            //         <Route path="/new-post" component={NewPost}/>
            //         <Route path="/posts"  component={Posts}/>
            //         {/*For 404 <Route render={() => <h1>Not found</h1>}/>*/}
            //         <Redirect from="/" to="/posts"/>
            //     </Switch>
            // </div>
        );
    }
}

export default Blog;