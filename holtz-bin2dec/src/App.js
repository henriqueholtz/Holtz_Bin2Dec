import './App.css';
import Card from './Components/Card'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="d-inline-block" >Development from Henrique Holtz</h2>
        <span className="p-relative float-right pr-10 text-10 t-50">@2021</span>
      </header>
      <body>
        <Card />
      </body>
    </div>
  );
}

export default App;
