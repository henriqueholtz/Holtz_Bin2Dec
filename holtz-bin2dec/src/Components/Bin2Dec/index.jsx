import React, { useState } from 'react';
import CustomInput from '../CustomInput';
import ChangeIcon from '../Bin2Dec/ChangeIcon'
import { ChangeThemeIcon } from './ChangeThemeIcon'

import styles from '../Bin2Dec/styles.module.scss';

export default function Bin2Dec({darkModeObj}) {
    const { darkMode, setDarkMode } = darkModeObj;
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
        const reversed = bin && bin.length > 0 && bin?.split('').reverse() || null;
        if (!reversed || !reversed.length > 0) return 0
        let dec = 0;
        
        for (let c = 0; c < reversed.length; c++) {
          if (reversed[c] === '1') {
            dec += Math.pow(2, c);
          }
        }
      
        return dec;
      }
      
    function funcToBinary(dec = 0) {
        return (dec >>> 0).toString(2);
    }

    function toggleCalculate(value) {
        if (fromIsBinary ) {
            setDecimalValue(funcToDecimal(value));
        }
        else {
            setBinaryValue(funcToBinary(parseInt(value)))
        }
    }

    function toggleType() {
        localStorage.setItem(keyFromIsBinary, !fromIsBinary)
        setFromIsBinary(!fromIsBinary)
    }

    function handleReset() {
        setDecimalValue(0);
        setBinaryValue(0);
        localStorage.removeItem(keyDecimalValue);
        localStorage.removeItem(keyBinaryValue);
    }

    return (
        <>
        <div className={styles.toggleTheme} onClick={() => setDarkMode(!darkMode)} >
            <ChangeThemeIcon />
        </div>
        <div className={styles.wrapper}>
            <div className={styles.body}>
                <span className={styles.title}>Bin2Dec Converter</span>
                <span className={styles.subTitle}>Convert Binary to Decimal or Decimal to Binary</span>

                <div className={styles.calculator}>
                    <span className={styles.reset} onClick={() => handleReset()}>Reset</span>
                    <CustomInput origin="From" value={fromIsBinary ? binaryValue : decimalValue} type={fromIsBinary ? 'Binary' : 'Decimal'} onChange={(e) => toggleFromValue(e.target.value)}/>
                    <div className={styles.wrapperChanger}>
                        <button type="button" className={styles.changeButton} onClick={toggleType} >
                            <ChangeIcon />
                        </button>

                        <span>=</span>
                    </div>
                    <CustomInput origin="To" value={fromIsBinary ? decimalValue : binaryValue} type={fromIsBinary ? 'Decimal' : 'Binary'} onChange={(e) => toggleFromValue(e.target.value)}/>
                </div>
            </div>
        </div>
        </>
    )
}