import React, { useState } from 'react';
// import { useTheme } from '@material-ui/core/styles';
import {makeStyles, InputLabel, Select, NativeSelect, MenuItem } from "@material-ui/core";


export default function Options() {
    const [from, setFrom] = useState("bin");
    const [to, setTo] = useState("dec");
    const classes = useStyles();
    
    function handleFromChange(e) {
        if (e === "bin") {
            setFrom("bin");
            setTo("dec");
        }
        else {
            setFrom("dec");
            setTo("bin");
        }
    }
    
    function handleToChange(e) {
        if (e === "dec") {
            setFrom("bin");
            setTo("dec");
        }
        else {
            setFrom("dec");
            setTo("bin");
        }
    }

    return (
        <div className={classes.div}>
            <InputLabel id="from" className={`d-inline-block ${classes.label}`}>From</InputLabel>
            <Select
            labelId="from"
            id="from"
            value={from}
            onChange={(event) => handleFromChange(event.target.value)}
            className={`d-inline-block ${classes.selectFrom}`}
            >
                <MenuItem value={"bin"}>Binary</MenuItem>
                <MenuItem value={"dec"}>Decimal</MenuItem>
            </Select>

            <InputLabel id="to" className={`d-inline-block ${classes.label}`}>To</InputLabel>
            <Select
            labelId="To"
            id="to"
            value={to}
            onChange={(event) => handleToChange(event.target.value)}
            className={`d-inline-block ${classes.selectTo}`}
            >
                <MenuItem value={"bin"}>Binary</MenuItem>
                <MenuItem value={"dec"}>Decimal</MenuItem>
            </Select>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    div: {
        padding: '30px',
        backgroundColor:'#ccc',
        textAlign: 'center'
    },
    selectFrom: {
        padding: '0 30px 0 5px',
        margin: '0 90px 0 15px'
    },
    selectTo: {
        padding: '0 30px 0 5px',
        margin: '0 30px'
    },
    label: {
        paddingBottom: '15px'
    }
}))
