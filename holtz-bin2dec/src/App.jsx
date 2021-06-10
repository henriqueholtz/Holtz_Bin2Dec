import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core";
import Footer from './Components/Footer';
import Bin2Dec from './Components/Bin2Dec';

import '../src/styles/globalStyles.scss'

export default function App() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false)

  return (
      <div className={`${darkMode ? 'dark-mode' : ''} ${classes.app}`}>
        <Bin2Dec darkModeObj={{darkMode, setDarkMode}} />
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
    backgroundColor: 'var(--bg-app)',
    width: '100vw',
    height: '100vh'
  }
}))