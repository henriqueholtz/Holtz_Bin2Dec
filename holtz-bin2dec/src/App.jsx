import React from 'react';
import { makeStyles } from "@material-ui/core";
import Footer from './Components/Footer';
import Bin2Dec from './Components/Bin2Dec';

import styles from '../src/styles/globalStyles.module.scss'

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Bin2Dec />
      <Footer />
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  app: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'var(--gray-500)',
    width: '100vw',
    height: '100vh'
  }
}))