import React, { useState } from 'react';
import './Home'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import CreateTask from '../../components/CreateTask/CreateTask';

const Home = () => {
    const [state, setState] = useState(false)

    const toggleDrawer = (open) => (event) => {
        setState(open)
    }

    const list = () => (
        <List>
            <ListItem>Hello</ListItem>
            <ListItem>Hello</ListItem>
            <ListItem>Hello</ListItem>
            <ListItem>Hello</ListItem>
        </List>
    )


    return (
        <div>
            <Button onClick={toggleDrawer(true)}> Open </Button>

            <CreateTask />

            <Drawer
                anchor={'right'}
                open={state}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>

        </div>
    );
};

export default Home;