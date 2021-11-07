import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import React, { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../../App';
import CreateTask from '../../components/CreateTask/CreateTask';
import Task from '../../components/Task/Task';
import './Home.css';


const Home = () => {

    const [taskList, setTaskList] = useContext(TaskContext)
    const [upcomingList, setUpcomingList] = useState([]);

    const [upcomingOpen, setUpcomingOpen] = useState(true);
    const [allOpen, setAllOpen] = useState(false);

    const [state, setState] = useState(false)
    
    const toggleDrawer = (open) => (event) => {
        setState(open)
    }

    const showUpcoming = () =>{
        setUpcomingOpen(true);
        setAllOpen(false)
    }

    const showAll = () =>{
        setUpcomingOpen(false);
        setAllOpen(true)
    }

    // -----------------------------------------------------
    useEffect(()=>{
        const dates =[] ;
    taskList.forEach(d=> dates.push(d.date));

    dates.sort(function(a, b){
        var aa = a.split('/').reverse().join(),
            bb = b.split('/').reverse().join();
        return aa < bb ? -1 : (aa > bb ? 1 : 0);
    });

    const today = new Date().toLocaleString('en-GB', { year: 'numeric', month: 'numeric', day: 'numeric' });
    const newUpcomingTask = [...upcomingList]
    let cnt=0;
    for (let i = 0; i < dates.length; i++) {
        const date= dates[i];
        if(cnt<3){
            if(date>today){
                newUpcomingTask.push(taskList.find(t=> t.date === date))
                cnt++;
            }
        }
    }
    setUpcomingList(newUpcomingTask)
    },[])
    console.log(upcomingList);

    // --------------------------------------------------

    const list = () => (
        <>
            <div className="drawer_buttons">
            <Button onClick={showUpcoming} variant={upcomingOpen? 'contained' : 'outlined'} id=''> Upcoming </Button>
            <Button onClick={showAll} variant={allOpen? 'contained' : 'outlined'} id=''> All </Button>
            </div>
            {
                allOpen && 
                <List>
                {
                    taskList.map(t=> <Task task={t} />)
                }
                </List>
            }

            {
                upcomingOpen && 
                <List>
                {
                    upcomingList.map(t=> <Task task={t} />)
                }
                </List>
            }   
        </>
    )


    return (
        <div>
            <Button onClick={toggleDrawer(true)} variant='contained' id='drawer_toggler'> Tasks </Button>

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