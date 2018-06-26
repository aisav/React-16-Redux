import React from 'react';
import {AppBar, Toolbar, Typography } from 'material-ui';
import Button from 'material-ui/Button';
import { Link} from 'react-router-dom';

// import  Tabs, { Tab } from 'material-ui/Tabs';

export default props =>
    <AppBar position="static">
        <Toolbar>

            <Button component={Link} to="/posts" color="inherit">Posts</Button>
            {/*<Button component={Link} to="/new-post" color="inherit">New Post</Button>*/}
        </Toolbar>
    </AppBar>


