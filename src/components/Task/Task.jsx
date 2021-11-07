import React from 'react';
import './Task.css';

const Task = (props) => {
    const {title, date, time} = props.task;
 
    
    return (
        <div className='task_container'>
            <h4 className="task_title">{title}</h4>
            <div className="date_time">
                <p className='task_time'>{time}</p>
                <p className='task_date'>{date}</p>
            </div>
            
        </div>
    );
};

export default Task;