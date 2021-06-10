import React, { useState } from 'react';
import CustomInput from '../CustomInput';
import ChangeIcon from '../Bin2Dec/ChangeIcon'
import * as HelperConverter from '../../Functions/HelperConverter'

import styles from '../Bin2Dec/styles.module.scss';

export default function Bin2Dec({darkModeObj}) {
    const { darkMode, setDarkMode } = darkModeObj;
    console.log('darkMode', darkModeObj)
    const keyBinaryValue = 'binaryValue';
    const keyDecimalValue = 'decimalValue';
    const keyFromIsBinary = 'fromIsBinary';
    const [binaryValue, _setBinaryValue] = useState(parseInt(localStorage.getItem(keyBinaryValue)) || 0);
    const [decimalValue, _setDecimalValue] = useState(parseInt(localStorage.getItem(keyDecimalValue)) || 0)
    const [fromIsBinary, setFromIsBinary] = useState(localStorage.getItem(keyFromIsBinary) == 'false' ? false : true)

    function toggleFromValue(value) {
        if (fromIsBinary) {
            setBinaryValue(value)
        }else {
            setDecimalValue(value)
        }
    }

    function setDecimalValue(value) {
        const newValue = value.toString().match(/[0-9]/g)?.join('') || 0;
        _setDecimalValue(newValue)
        localStorage.setItem(keyDecimalValue, newValue);
        if(!fromIsBinary) {
            toggleCalculate(newValue)
        }
    }

    function setBinaryValue(value) {
        const newValue = value.toString().match(/[0-1]/g)?.join('') || 0;
        _setBinaryValue(newValue);
        localStorage.setItem(keyBinaryValue, newValue);
        if (fromIsBinary) toggleCalculate(newValue)
    }

    function funcToDecimal(bin) {
        let dec = 0;
      
        for (let c = bin.length - 1, i = 0; c >= 0; c--, i++) {
          dec += bin[c] * Math.pow(2, i);
        }
      
        return dec;
      }
      
    function funcToBinary(dec = 0) {
        return (dec >>> 0).toString(2);
    }

    function toggleCalculate(value) {
        if (fromIsBinary ) {
            setDecimalValue(funcToDecimal(parseInt(value)));
        }
        else {
            setBinaryValue(funcToBinary(parseInt(value)))
        }
    }

    function toggleType() {
        localStorage.setItem(keyFromIsBinary, !fromIsBinary)
        setFromIsBinary(!fromIsBinary)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.body}>
                <span className={styles.title}>Bin2Dec Converter</span>
                <span className={styles.subTitle}>Convert Binary to Decimal or Decimal to Binary</span>

                <div className={styles.calculator}>
                    <CustomInput origin="From" value={fromIsBinary ? binaryValue : decimalValue} type={fromIsBinary ? 'Binary' : 'Decimal'} onChange={(e) => toggleFromValue(e.target.value)}/>
                    <div>
                        <button type="button" className={styles.changeButton} onClick={toggleType} >
                            <ChangeIcon />
                        </button>

                        <span className={styles.equal}>=</span>
                    </div>
                    <CustomInput origin="To" value={fromIsBinary ? decimalValue : binaryValue} type={fromIsBinary ? 'Decimal' : 'Binary'} onChange={(e) => toggleFromValue(e.target.value)}/>

                    <input type="checkbox" id="darkMode" onClick={() => setDarkMode(!darkMode)} />
                </div>
            </div>
        </div>
    )
}