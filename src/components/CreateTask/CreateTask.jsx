import React, { useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import TimePicker from '@mui/lab/TimePicker';



const CreateTask = () => {
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);

    console.log(time?.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
    console.log(date?.toLocaleString('en-GB', { year: 'numeric', month: 'numeric', day: 'numeric' }));

    return (
        <div>
            <h1>Task Creator</h1>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Select Date"
                    value={date}
                    onChange={(newValue) => {
                        setDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                <TimePicker
                    label="Basic example"
                    value={time}
                    onChange={(newValue) => {
                        setTime(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
    );
};

export default CreateTask;