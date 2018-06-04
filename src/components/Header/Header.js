import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



export default props => 

    <AppBar position="static">
        <Toolbar>
            <IconButton  color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
                The Battery Archive
            </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>

    
