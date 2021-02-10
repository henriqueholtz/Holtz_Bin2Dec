import React, { useState } from 'react';
import { makeStyles, TextareaAutosize, Button } from "@material-ui/core";

export default function Card({input}) {
    const classes = useStyles();

    return (
        <>
            {input ? (
                <div className={`d-inline-block ${classes.input}`}>
                    <TextareaAutosize aria-label="minimum height" rows={20} placeholder="Input" className={classes.textArea} />
                </div>
            ) : (
                <div className={`d-inline-block ${classes.output}`}>
                    <TextareaAutosize aria-label="minimum height" rows={20} placeholder="Output" className={classes.textArea} />
                </div>
            )}
        </>
    )
}


const useStyles = makeStyles((theme) => ({
    input: {
        width: '40vw',
        height: '65vh',
        margin: '5vh 5vw 1vh',
        borderRadius: '15px'
    },
    output: {
        width: '40vw',
        margin: '5vh 5vw 1vh',
        height: '65vh',
        borderRadius: '15px'
    },
    textArea: {
        width: '40vw',
        height: '65vh',
        borderRadius: '15px'
    }
}))