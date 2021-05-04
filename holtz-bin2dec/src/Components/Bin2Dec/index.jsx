import React, { useState } from 'react';
import CustomInput from '../CustomInput';
import ChangeIcon from '../Bin2Dec/ChangeIcon'

import styles from '../Bin2Dec/styles.module.scss';

export default function Bin2Dec() {
    const [fromValue, setFromValue] = useState(0);
    const [toValue, setToValue] = useState(0);
    const [fromType, setFromType] = useState('Binary');
    const [toType, setToType] = useState('Decimal');

    function toggleType() {
        const oldFromValue = fromValue;
        const oldToValue = toValue;
        if (fromType === 'Binary'){
            setFromType('Decimal');
            setToType('Binary');
        }
        else {
            setFromType('Binary');
            setToType('Decimal');
        }
        setFromValue(oldToValue);
        setToValue(oldFromValue);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.body}>
                <span className={styles.title}>Bin2Dec Converter</span>
                <span className={styles.subTitle}>Convert Binary to Decimal or Decimal to Binary</span>

                <div className={styles.calculator}>
                    <CustomInput origin="From" value={fromValue} type={fromType} onChange={(e) => setFromValue(e.target.value)}/>
                    <div>
                        <button type="button" className={styles.changeButton} onClick={toggleType} >
                            <ChangeIcon />
                        </button>

                        <span className={styles.equal}>=</span>
                    </div>
                    <CustomInput origin="To" value={toValue} type={toType} onChange={(e) => setToValue(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}