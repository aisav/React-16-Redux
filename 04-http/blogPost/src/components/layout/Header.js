import React from 'react';
import {AppBar, Toolbar, Typography } from 'material-ui';
import  Tabs, { Tab } from 'material-ui/Tabs';

export default props =>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="headline" color="inherit" >
                Posts
            </Typography>
        </Toolbar>
    </AppBar>


