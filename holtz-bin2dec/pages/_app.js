import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Footer from '../Components/Footer';
import Bin2Dec from '../Components/Bin2Dec';
import Head from 'next/head';
import '../styles/globalStyles.scss';

export default function App() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? 'dark-mode' : ''} ${classes.app}`}>
      <Head>
        <title>Holtz_Bin2Dec</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Converter numbers of binary to decimal or on the contrary"
        />
        <link rel="icon" href="/static/icon.png" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
      </Head>
      <Bin2Dec darkModeObj={{ darkMode, setDarkMode }} />
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
    height: '100vh',
  },
}));
