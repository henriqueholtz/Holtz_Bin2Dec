import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import PropTypes from 'prop-types';

import styles from '../CustomInput/styles.module.scss';

const inputProps = {
    min: 0,
    color:"#83DBD0"
}

export default function CustomInput({origin, value, type, onChange}) {
    return (
        <div>
            <label className={styles.label} htmlFor={type}>{origin}</label>
            {/* <input className={styles.input} name={type} type="number" value={value} onChange={onChange} min={0} width={186} placeholder={type} /> */}
            <TextField name={type} type="number" variant="outlined" value={value} onChange={onChange} inputProps={inputProps} InputProps={{
            startAdornment: <InputAdornment position="start" style={{color: '#fff !important'}}>{type}</InputAdornment>,
          }} width={186} color="#83DBD0 !important"/>
        </div>
    )
}

CustomInput.propTypes = {
    origin: PropTypes.oneOf(['From', 'To']).isRequired,
    value: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['Binary', 'Decimal']).isRequired,
    onChange: PropTypes.func.isRequired
}