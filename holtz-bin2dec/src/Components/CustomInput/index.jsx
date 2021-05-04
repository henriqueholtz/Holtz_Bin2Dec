import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import PropTypes from 'prop-types';

import styles from '../CustomInput/styles.module.scss';

const inputProps = {
    min: 0
}

export default function CustomInput({origin, value, type, onChange}) {
    return (
        <div>
            <label className={styles.label} htmlFor={type}>{origin}</label>
            {/* <input className={styles.input} name={type} type="number" value={value} onChange={onChange} min={0} width={186} placeholder={type} /> */}
            {/* <span id="textField">
                <TextField id="x" size="medium" color="#FFF" name={type} type="number" variant="outlined" value={value} onChange={onChange} inputProps={inputProps} InputProps={{
                startAdornment: <InputAdornment position="start" className={styles.inputAdornment} >{type}</InputAdornment>,
                          }} color="#FFF !important"/>
            </span> */}
            <TextField
                label="labelFix"
                color="white"
                id={type}
                className={styles.input}
                value={value}
                onChange={onChange} 
                type="number"
                inputProps={inputProps}
                InputProps={{
                    startAdornment: <InputAdornment position="start" className={styles.inputAdornment} >{type}</InputAdornment>
                }}
                variant="outlined"
            />
        </div>
    )
}

CustomInput.propTypes = {
    origin: PropTypes.oneOf(['From', 'To']).isRequired,
    value: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['Binary', 'Decimal']).isRequired,
    onChange: PropTypes.func.isRequired
}