import React from 'react';
import styles from '../Bin2Dec/styles.module.scss';
import CustomInput from '../CustomInput';

export default function Bin2Dec() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.body}>
                <span className={styles.title}>Bin2Dec Converter</span>
                <span className={styles.subTitle}>Convert Bynary to Decimal or Decimal to Binary</span>

                <div className={styles.calculator}>
                    <CustomInput type="From"/>
                    <CustomInput type="To"/>
                </div>
            </div>
        </div>
    )
}