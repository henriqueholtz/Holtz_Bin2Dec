import React, { useEffect, useState } from 'react';
import CustomInput from '../CustomInput';
import ChangeIcon from '../Bin2Dec/ChangeIcon';
import { ChangeThemeIcon } from './ChangeThemeIcon';
import { ConverterToDecimal, ConverterToBinary } from '../../Functions';

import styles from '../Bin2Dec/styles.module.scss';

export default function Bin2Dec({ darkModeObj }) {
  const { darkMode, setDarkMode } = darkModeObj;
  const keyBinaryValue = 'binaryValue';
  const keyDecimalValue = 'decimalValue';
  const keyFromIsBinary = 'fromIsBinary';
  const [binaryValue, _setBinaryValue] = useState(0);
  const [decimalValue, _setDecimalValue] = useState(0);
  const [fromIsBinary, setFromIsBinary] = useState(false);
  const [animation, setAnimation] = useState(false);

  function toggleFromValue(value) {
    if (fromIsBinary) {
      setBinaryValue(value);
    } else {
      setDecimalValue(value);
    }
  }

  function setDecimalValue(value) {
    const newValue = value.toString().match(/[0-9]/g)?.join('') || 0;
    _setDecimalValue(newValue);
    localStorage.setItem(keyDecimalValue, newValue);
    if (!fromIsBinary) {
      toggleCalculate(newValue);
    }
  }

  function setBinaryValue(value) {
    const newValue = value.toString().match(/[0-1]/g)?.join('') || 0;
    _setBinaryValue(newValue);
    localStorage.setItem(keyBinaryValue, newValue);
    if (fromIsBinary) toggleCalculate(newValue);
  }

  function toggleCalculate(value) {
    if (fromIsBinary) {
      setDecimalValue(ConverterToDecimal(value));
    } else {
      setBinaryValue(ConverterToBinary(parseInt(value)));
    }
  }

  function toggleType() {
    localStorage.setItem(keyFromIsBinary, !fromIsBinary);
    setFromIsBinary(!fromIsBinary);
  }

  function handleReset() {
    setDecimalValue(0);
    setBinaryValue(0);
    localStorage.removeItem(keyDecimalValue);
    localStorage.removeItem(keyBinaryValue);
  }

  const toggleTheme = () => {
    setAnimation(true);

    setTimeout(() => {
      setAnimation(false);
      setDarkMode(!darkMode);
    }, 450);
  };

  useEffect(() => {
    if (localStorage) {
      const newBinaryValue = parseInt(localStorage.getItem(keyBinaryValue));
      if (newBinaryValue) setBinaryValue(newBinaryValue);

      const newDecimalValue = parseInt(localStorage.getItem(keyDecimalValue));
      if (newDecimalValue) setDecimalValue(newDecimalValue);

      const newFromIsBinary =
        localStorage.getItem(keyFromIsBinary) === 'false' ? false : true;
      if (newFromIsBinary) setFromIsBinary(newFromIsBinary);
    }
  }, []);

  return (
    <>
      <div
        className={`${styles.toggleTheme} ${
          animation ? styles.animationTheme : ''
        }`}
        onClick={() => toggleTheme()}
      >
        <ChangeThemeIcon />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.body}>
          <span className={styles.title}>
            Bin
            <b
              style={{ color: 'var(--change-icon-bg-color)', fontWeight: 400 }}
            >
              2
            </b>
            Dec Converter
          </span>
          <span className={styles.subTitle}>
            Convert Binary to Decimal or Decimal to Binary
          </span>

          <div className={styles.calculator}>
            <span className={styles.reset} onClick={() => handleReset()}>
              Reset
            </span>
            <CustomInput
              origin="From"
              value={fromIsBinary ? binaryValue : decimalValue}
              type={fromIsBinary ? 'Binary' : 'Decimal'}
              onChange={(e) => toggleFromValue(e.target.value)}
            />
            <div className={styles.wrapperChanger}>
              <button
                type="button"
                className={styles.changeButton}
                onClick={toggleType}
              >
                <ChangeIcon />
              </button>

              <span>=</span>
            </div>
            <CustomInput
              origin="To"
              value={fromIsBinary ? decimalValue : binaryValue}
              type={fromIsBinary ? 'Decimal' : 'Binary'}
              onChange={(e) => toggleFromValue(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
