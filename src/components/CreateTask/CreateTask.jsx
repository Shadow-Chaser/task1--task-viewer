import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useContext, useState } from 'react';
import { TaskContext } from '../../App';
import './CreateTask.css';

const CreateTask = () => {
    const [taskList, setTaskList] = useContext(TaskContext);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [task, setTask] = useState({})

    // console.log(time?.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
    // console.log(date?.toLocaleString('en-GB', { year: 'numeric', month: 'numeric', day: 'numeric' }));
    
    const handleInput = e =>{
            const info = { ...task }
            info[e.target.name] = e.target.value;
            setTask(info);
    }

    const handleSubmit =()=>{
        const taskInfo = {...task};
        taskInfo.date = date?.toLocaleString('en-GB', { year: 'numeric', month: 'numeric', day: 'numeric' });
        taskInfo.time = time?.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        console.log(taskInfo);

        const updatedTaskList = [...taskList]
        updatedTaskList.push(taskInfo)
        setTaskList(updatedTaskList)
        localStorage.setItem('taskList', JSON.stringify(updatedTaskList))
    }


    return (
        <div className='form_container'>
        
        <>
            <h1>Task Creator</h1>
            <TextField onChange={handleInput} id="outlined-basic" margin="normal" label="Task Name" variant="outlined" name='title'/>
            <TextField onChange={handleInput} id="outlined-multiline-static" label="Task Description (Optional)" multiline rows={4} variant="outlined" name='description'/>
            <br/>
            <LocalizationProvider dateAdapter={AdapterDateFns} >
                <DatePicker 
                    label="Select Date"
                    value={date}
                    onChange={(newValue) => {
                        setDate(newValue);
                    }}
                    renderInput={(params) => <TextField onChange={handleInput} name='date' {...params} />}
                />
                <br/>
                <TimePicker
                    label="Select Time"
                    value={time}
                    onChange={(newValue) => {
                        setTime(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>

            <Button onClick={handleSubmit} variant="contained" id='submit_btn'  >Create Task</Button>

        </>
        
        </div>
    );
};

export default CreateTask;