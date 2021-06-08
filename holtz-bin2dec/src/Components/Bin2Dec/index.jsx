import React, { useState } from 'react';
import CustomInput from '../CustomInput';
import ChangeIcon from '../Bin2Dec/ChangeIcon'

import styles from '../Bin2Dec/styles.module.scss';

export default function Bin2Dec() {
    const [fromValue, setFromValue] = useState(0);
    const [toValue, setToValue] = useState(0);
    const [fromType, setFromType] = useState('Binary');
    const [toType, setToType] = useState('Decimal');

    function funcToDecimal(bin) {
        let dec = 0;
      
        for (let c = bin.length - 1, i = 0; c >= 0; c--, i++) {
          dec += bin[c] * Math.pow(2, i);
        }
      
        return dec;
      }
      
    function funcToBinary(dec) {
        return (dec >>> 0).toString(2);
    }

    function funcIsBinaryValid(bin) {
        if (!bin || bin.length === 0) return false;
        let resp = bin.replace('1', '');
        resp = bin.replace('0', '');

        return resp?.length > 0
    }

    function toggleCalculate() {
        const fromIsBinary = fromType === 'Binary';
        const binaryValue = fromIsBinary ? fromValue : toValue;
        const isBinaryValid = fromIsBinary ? funcIsBinaryValid(binaryValue) : false;
        const decimalValue = fromIsBinary ? toValue : fromValue;
        
        if (fromIsBinary && binaryValue && isBinaryValid ) {
            setToValue(funcToDecimal(binaryValue));
        }
        else if (decimalValue && !fromIsBinary){
            setToValue(funcToBinary(decimalValue))
        }
        else {
            alert(`Don't is possible converter the number ${fromValue} of ${fromType} to ${toType}`);
        }
    }

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
                    <button type="button" onClick={toggleCalculate}>
                        Calculate
                    </button>
                </div>
            </div>
        </div>
    )
}