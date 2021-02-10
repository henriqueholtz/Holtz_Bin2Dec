import React from 'react';
import Card from './Components/Card'
import Options from './Components/Options'
import { makeStyles } from "@material-ui/core";

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <h2 className="d-inline-block" >Bin2Dec Converter</h2>
        <span className="p-relative float-right pr-10 text-10 t-50">@2021</span>
      </header>
      <body>
        <Options />
        <Card input/>
        <Card />
      </body>
      <footer className={classes.footer}>
        <h5 className="d-inline-block" >Development from Henrique Holtz</h5>
        <span className="p-relative float-right pr-10 text-8 t-20">@2021</span>
      </footer>
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  app: {
    margin: 0,
    padding: 0
  },
  header: {
    padding: '20px 0',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#fff',
    fontWeight: 500
  },
  footer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    padding: '7px 0 3px',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#ddd',
    fontWeight: 300
  }
}))